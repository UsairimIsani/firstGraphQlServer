import { makeExecutableSchema } from 'graphql-tools';
import { typeDefs } from './schema.js';
import { resolvers } from './resolvers.js';
 let GraphQLSchema = makeExecutableSchema({
    typeDefs,
    resolvers
});
export default GraphQLSchema;