import type { IncomingMessage, Server, ServerResponse } from 'http';

import * as dotenv from 'dotenv';
import { app } from './app';
import http from 'http';
import { mongoConnect } from './services';

dotenv.config();

const { API_PORT } = process.env;

const httpServer: Server<typeof IncomingMessage, typeof ServerResponse> =
  http.createServer(app);

const startServer = async (): Promise<void> => {
  await mongoConnect();

  httpServer.listen(API_PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`🚀 Server running at: http://localhost:${API_PORT}`);
  });
};

startServer();
