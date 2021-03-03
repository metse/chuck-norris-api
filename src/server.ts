import Koa from 'koa';
import config from './config';
import server from './api';

const app = new Koa();

server.applyMiddleware({ app });

app.listen(config.port, () => {
  console.log(`Chuck norris listening on port ${config.port} in ${config.environment} 🚀`);
});