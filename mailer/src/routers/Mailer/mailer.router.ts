import type { Router } from 'express';
import express from 'express';

import {
  HTTPVerifyMailHandler,
  HTTPforgotPassMailHandler,
} from './mailer.controller';

const mailerRouter: Router = express.Router();

mailerRouter.post('/verify', HTTPVerifyMailHandler);
mailerRouter.post('/forgot-password', HTTPforgotPassMailHandler);

export { mailerRouter };
