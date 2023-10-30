import type { emailConfigType } from './type';

import * as dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const { EMAIL_USERNAME, EMAIL_PASSWORD, MAILER_NODE_ENV } = process.env;

const TRANSPORT_OPTIONS = {
  production: {
    service: 'gmail',
    host: 'smtp.gmail.com',
    secure: true,
    auth: {
      user: EMAIL_USERNAME,
      pass: EMAIL_PASSWORD,
    },
  },
  development: {
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: EMAIL_USERNAME,
      pass: EMAIL_PASSWORD,
    },
  },
}[(MAILER_NODE_ENV as string) || 'development'];

const transporterHandler = ({
  userEmail,
  emailBody,
  subject,
}: emailConfigType) => {
  const transporter = nodemailer.createTransport(TRANSPORT_OPTIONS);

  const mailOptions = {
    from: EMAIL_USERNAME,
    to: userEmail,
    html: emailBody,
    subject,
  };

  return { transporter, mailOptions };
};

export { transporterHandler };
