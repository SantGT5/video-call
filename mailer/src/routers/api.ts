import type { Router } from 'express';
import express from 'express';

import { mailerRouter } from './Mailer';

const api: Router = express.Router();

api.use('/mailer', mailerRouter);

export { api };
