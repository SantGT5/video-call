import type { Express } from 'express';

import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import { corsConfig, cspConfig } from './constants/config';

import { api } from './routers/api';
// import { authRouter as auth } from './auth/auth.router';

const app: Express = express();

app.use(cors(corsConfig));

app.use(helmet.contentSecurityPolicy(cspConfig));

app.use(
  helmet.crossOriginEmbedderPolicy({
    policy: 'require-corp',
  })
);

app.use(express.json());
app.use(cookieParser());
app.use(morgan('tiny'));

app.use(api);
// app.use('/auth', auth);

export { app };
