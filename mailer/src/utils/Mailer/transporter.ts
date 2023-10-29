import type { emailConfigType } from './type';

import * as dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const transporterHandler = ({
  userEmail,
  emailBody,
  subject,
}: emailConfigType) => {
  const { EMAIL_USERNAME, EMAIL_PASSWORD } = process.env;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    secure: true,
    auth: {
      user: EMAIL_USERNAME,
      pass: EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: EMAIL_USERNAME,
    to: userEmail,
    html: emailBody,
    subject,
  };

  return { transporter, mailOptions };
};

export { transporterHandler };
