import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

const hashPasswordHandler = (password: string) =>
  bcrypt.hashSync(password, SALT_ROUNDS);

export { hashPasswordHandler };
