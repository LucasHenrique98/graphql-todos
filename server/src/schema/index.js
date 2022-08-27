const { GraphQLSchema } = require('graphql');
const Mutations = require('./mutations');
const RootQuery = require('./rootQueryTypes');

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutations,
});
