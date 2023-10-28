import type { Router } from 'express';
import express from 'express';

import { userRouter } from './User';

const api: Router = express.Router();

api.use('/user', userRouter);

export { api };
