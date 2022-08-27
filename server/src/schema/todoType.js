const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLBoolean } = require('graphql');

const TodoType = new GraphQLObjectType({
  name: 'Todo',
  fields: {
    id: { type: GraphQLID },
    description: { type: GraphQLString },
    done: { type: GraphQLBoolean },
  },
});

module.exports = TodoType;
