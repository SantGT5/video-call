import * as dotenv from 'dotenv';
import { connect, connection, disconnect } from 'mongoose';
import type { ConnectOptions } from 'mongoose';

dotenv.config();

const mongodbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions;

const { MONGODB_USER, MONGODB_PASSWORD } = process.env;

const MONGO_URL = `mongodb://${MONGODB_USER}:${MONGODB_PASSWORD}@mongo:27017/video-call`;

// eslint-disable-next-line no-console
connection.once('open', () => console.log('🪐 MongoDB is ready'));

connection.on('error', (err) => console.error(err));

const mongoConnect = async (): Promise<void> => {
  await connect(MONGO_URL, mongodbOptions);
};

const mongoDisconnect = async (): Promise<void> => {
  await disconnect();
};

export { mongoConnect, mongoDisconnect };
