import * as dotenv from 'dotenv';
dotenv.config();

import jwt from 'jsonwebtoken';

const {
  JWT_SECRET,
  JWT_EXPIRATION_TIME,

  JWT_REFRESH_SECRET,
  JWT_REFRESH_EXPIRATION_TIME,

  JWT_SECRET_RESET_PASSWORD,
  JWT_EXPIRATION_TIME_RESET_PASSWORD,
} = process.env;

const generateToken = (id: string) => {
  const accessToken = jwt.sign({ id }, JWT_SECRET as string, {
    expiresIn: Number(JWT_EXPIRATION_TIME),
  });

  return { accessToken };
};

const generateRefreshToken = (id: string) => {
  const refreshToken = jwt.sign({ id }, JWT_REFRESH_SECRET as string, {
    expiresIn: Number(JWT_REFRESH_EXPIRATION_TIME),
  });

  return { refreshToken };
};

const generateResetPasswordToken = (email: string) => {
  const accessToken = jwt.sign(
    { email, forgotPass: true },
    JWT_SECRET_RESET_PASSWORD as string,
    {
      expiresIn: Number(JWT_EXPIRATION_TIME_RESET_PASSWORD),
    }
  );

  return { accessToken };
};

export { generateToken, generateResetPasswordToken, generateRefreshToken };
