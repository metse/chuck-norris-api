import Koa from 'koa';
import helmet from 'koa-helmet';
import config from './config';

const app = new Koa();

app.use(helmet());

app.listen(config.port, () => {
  console.log(`Chuck norris listening on port ${config.port} in ${config.environment} 🚀`);
});