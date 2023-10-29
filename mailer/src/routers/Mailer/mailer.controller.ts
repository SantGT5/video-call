import type { Request, Response } from 'express';
import type { emailConfigType, emailSenderType } from './type';

import { transporterHandler } from '../../utils';

const HTTPVerifyMailHandler = async (req: Request, res: Response) => {
  try {
    const { userEmail, accessToken } = req.body as emailSenderType;
    const options: emailConfigType = {
      userEmail,
      subject: 'Verify Your Email',
      emailBody: `<p>Click <a href="http://localhost:8080/auth/verify?token=${accessToken}">here</a> to verify your email.</p>`,
    };

    const { transporter, mailOptions } = transporterHandler(options);

    transporter.sendMail(mailOptions);

    return res
      .status(200)
      .json({ message: 'Verification email sent.', ok: true });
  } catch (error) {
    return res.status(500).json({
      error: 'An error occurred while sending the email.',
      ok: false,
    });
  }
};

const HTTPforgotPassMailHandler = async (req: Request, res: Response) => {
  try {
    const { userEmail, accessToken } = req.body as emailSenderType;
    const options: emailConfigType = {
      userEmail,
      subject: 'Password Reset',
      emailBody: `
      <p>Hello,</p>
      <p>Please use the following link to reset your password:</p>
      <p><a href="http://localhost:8080/auth/reset-password?token=${accessToken}">Reset Password</a></p>
      <p>This link will expire in 1 hour.</p>
      <p>If you did not request a password reset, please ignore this email.</p>
    `,
    };

    const { transporter, mailOptions } = transporterHandler(options);

    transporter.sendMail(mailOptions);

    return res
      .status(200)
      .json({ message: 'Verification email sent.', ok: true });
  } catch (error) {
    return res.status(500).json({
      error: 'An error occurred while sending the email.',
      ok: false,
    });
  }
};

export { HTTPVerifyMailHandler, HTTPforgotPassMailHandler };
