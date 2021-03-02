import dotenv from 'dotenv';
import path from 'path';

if (!process.env.NODE_ENV) {
  throw new Error('The NODE_ENV environment variable is required but was not specified.');
}

const env: string = path.join(__dirname, '..', `.env.${process.env.NODE_ENV}`);

dotenv.config({ path: env });