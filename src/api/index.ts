import { ApolloServer } from 'apollo-server-koa';
import typeDefs from '../schema';
import resolvers from './resolvers';
import config from '../config';

const server = new ApolloServer({
  debug: config.environment === 'development',
  playground: config.environment === 'development',
  tracing: true,
  resolvers,
  typeDefs,
});

export default server;