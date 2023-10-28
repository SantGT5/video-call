import type { UserSchemaType } from '../../schemas';

import { Users } from '../../schemas';

const createUser = async (user: UserSchemaType) => {
  const { name, username, email, password } = user;

  const newUser = await Users.create({
    name,
    username,
    email,
    password,
  });

  return newUser;
};

export { createUser };
