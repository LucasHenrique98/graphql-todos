const { GraphQLObjectType, GraphQLList, GraphQLNonNull, GraphQLID } = require('graphql');
const mongoose = require('mongoose');

const TodoType = require('./todoType.js');
const Todo = mongoose.model('todo');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    todos: {
      type: new GraphQLList(TodoType),
      resolve(parentValue, args) {
        return Todo.find({});
      },
    },
    todo: {
      type: TodoType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parentValue, { id }) {
        return Todo.findById(id);
      },
    },
  },
});

module.exports = RootQuery;
