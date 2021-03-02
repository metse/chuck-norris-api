import './env';

interface IConfig {
  environment: string;
  port: number;
};

const config: IConfig = {
  environment: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT as string, 10),
};

export default config;