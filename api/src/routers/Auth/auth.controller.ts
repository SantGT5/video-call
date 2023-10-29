import type { Request, Response } from 'express';
import type { CreateUserType } from './type';

import { createUser, getUserByEmail } from '../../models';
import { generateToken, mailer_api } from '../../utils';
import { hashPasswordHandler } from './help-func';

const HttpSignUp = async (req: Request, res: Response) => {
  try {
    const { name, username, email, password } = req.body as CreateUserType;

    const user = await getUserByEmail(email);

    if (user)
      return res.status(409).json({ error: 'Email is already in use.' });

    const hashedPass = hashPasswordHandler(password);

    const createdUser = await createUser({
      name,
      username,
      email,
      password: hashedPass,
    });

    const { accessToken } = generateToken(createdUser._id.toString());
    const { data } = await mailer_api.post('mailer/verify', {
      userEmail: email,
      accessToken,
    });

    if (!data.ok) return res.status(500).json({ error: data.message });

    return res.status(200).json({ message: data.message });
  } catch (err) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export { HttpSignUp };
