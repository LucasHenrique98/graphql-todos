const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull } = require('graphql');
const TodoType = require('./todoType');
const mongoose = require('mongoose');
const Todo = mongoose.model('todo');

const Mutations = new GraphQLObjectType({
  name: 'Mutations',
  fields: {
    addTodo: {
      type: TodoType,
      args: {
        description: { type: GraphQLString },
      },
      resolve(parentValue, { description }) {
        return new Todo({ description }).save();
      },
    },
    deleteTodo: {
      type: TodoType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Todo.findByIdAndDelete(id);
      },
    },
    completeTodo: {
      type: TodoType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Todo.complete(id);
      },
    },
  },
});

module.exports = Mutations;
