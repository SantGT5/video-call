import type { Request, Response } from 'express';
import type { CreateUserType } from './type';

import { createUser } from '../../models';

const HttpCreateUser = async (req: Request, res: Response) => {
  try {
    const { name, username, email, password } = req.body as CreateUserType;

    const created = await createUser({ name, username, email, password });

    return res.status(201).json(created);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export { HttpCreateUser };
