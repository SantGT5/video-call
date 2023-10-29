import type { IncomingMessage, Server, ServerResponse } from 'http';

import * as dotenv from 'dotenv';
import { app } from './app';
import http from 'http';

dotenv.config();

const { MAILER_PORT } = process.env;

const httpServer: Server<typeof IncomingMessage, typeof ServerResponse> =
  http.createServer(app);

const startServer = async (): Promise<void> => {
  httpServer.listen(MAILER_PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`📨 MAILER server running at: http://localhost:${MAILER_PORT}`);
  });
};

startServer();
