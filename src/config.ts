import './env';

interface IConfig {
  environment: string;
  baseUrl: string;
  port: number;
};

const config: IConfig = {
  environment: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT as string, 10),
  baseUrl: process.env.CHUCK_NORRIS_ENDPOINT || 'https://api.chucknorris.io',
};

export default config;