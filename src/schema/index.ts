import { gql } from 'apollo-server-koa';
 
const schema = gql`
  type Category {
    name: String
  }

  type Fact {
    iconUrl: String
    id: String
    url: String
    value: String
  }

  type Query {
    categories: [Category]
    random(category: String!): Fact
  }
`;

export default schema;