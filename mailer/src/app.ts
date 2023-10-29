import type { Express } from 'express';

import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import { api } from './routers/api';
import { cspConfig } from './constants/config';

const app: Express = express();

app.use(
  cors({
    methods: 'POST',
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

app.use(helmet.contentSecurityPolicy(cspConfig));

app.use(
  helmet.crossOriginEmbedderPolicy({
    policy: 'require-corp',
  })
);

app.use(express.json());
app.use(morgan('tiny'));

app.use(api);

export { app };
