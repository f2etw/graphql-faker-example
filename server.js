
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
} from 'graphql';
import { GraphQLEmail } from 'graphql-tower-types';

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLEmail },
  },
});

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      me: { type: UserType, resolve: () => {} },
      members: { type: new GraphQLList(UserType), resolve: () => {} },
    },
  }),
  subscription: new GraphQLObjectType({
    name: 'Subscription',
    fields: {
      onNewMessage: { type: GraphQLString },
    },
  }),
});
