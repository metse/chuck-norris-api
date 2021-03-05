import Koa from 'koa';
import koaBody from 'koa-bodyparser';
import cors from '@koa/cors';
import helmet from 'koa-helmet';
import config from './config';
import server from './api';

const app = new Koa();

const options = {
  allowHeaders: 'origin, content-type, accept, authorization',
  allowMethods: 'POST',
};

app.use(koaBody());
app.use(cors(options));
app.use(helmet());

server.applyMiddleware({ app });

app.listen(config.port, () => {
  console.log(`Chuck norris listening on port ${config.port} in ${config.environment} 🚀`);
});