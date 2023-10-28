import type { IncomingMessage, Server, ServerResponse } from 'http';

import * as dotenv from 'dotenv';
import { app } from './app';
import http from 'http';
import { mongoConnect } from './services';

dotenv.config();

const PORT = process.env.PORT;

const httpServer: Server<typeof IncomingMessage, typeof ServerResponse> =
  http.createServer(app);

const startServer = async (): Promise<void> => {
  await mongoConnect();

  httpServer.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`🚀 Server running at: http://localhost:${PORT}`);
  });
};

startServer();
