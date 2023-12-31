import type { Router } from 'express';
import express from 'express';

import { authRouter } from './Auth';

const api: Router = express.Router();

api.use('/auth', authRouter);

export { api };
