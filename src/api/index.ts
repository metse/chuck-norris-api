import { ApolloServer } from 'apollo-server-koa';
import typeDefs from '../schema';
import resolvers from './resolvers';

const server = new ApolloServer({
  debug: true,
  playground: true,
  tracing: true,
  resolvers,
  typeDefs,
});

export default server;