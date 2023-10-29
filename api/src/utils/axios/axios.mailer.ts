import type { AxiosInstance } from 'axios';

import * as dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const { MAILER_BASE_URL } = process.env;

const mailer_api: AxiosInstance = axios.create({
  baseURL: MAILER_BASE_URL as string,
});

export { mailer_api };
