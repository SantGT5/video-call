import type { UserSchemaType } from '../../schemas';

import { Users } from '../../schemas';

const createUser = async (user: UserSchemaType) => {
  const { name, username, email, password } = user;

  const createdUser = await Users.create({
    name,
    username,
    email,
    password,
  });

  return createdUser;
};

const getUserByEmail = async (email: string) => {
  const data = await Users.findOne({ email }, { __v: 0 });

  return data;
};

const getUserById = async (id: string) => {
  const data = await Users.findById({ _id: id }, { __v: 0 });

  return data;
};

export { createUser, getUserByEmail, getUserById };
