import type { Router } from 'express';
import express from 'express';

import { HttpCreateUser } from './user.controller';

const userRouter: Router = express.Router();

userRouter.post('/create', HttpCreateUser);

export { userRouter };
