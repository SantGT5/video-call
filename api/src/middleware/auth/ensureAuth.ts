import type { NextFunction, Request, Response } from 'express';

import * as dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const ensureAuth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { accessToken, refreshToken } = req.cookies;
    const { JWT_SECRET } = process.env;

    if (!accessToken || !refreshToken)
      return res.status(401).json({ error: 'Unauthorized' });

    jwt.verify(
      accessToken,
      JWT_SECRET as string,
      (err: jwt.VerifyErrors | null) => {
        if (err) return res.status(401).json({ error: 'Unauthorized' });

        next();
      }
    );
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export { ensureAuth };
