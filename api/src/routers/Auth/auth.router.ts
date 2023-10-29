import type { Router } from 'express';
import express from 'express';

import { HttpSignUp } from './auth.controller';

const authRouter: Router = express.Router();

authRouter.post('/signup', HttpSignUp);

export { authRouter };
