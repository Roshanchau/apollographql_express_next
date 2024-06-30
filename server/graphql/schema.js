const { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLList, GraphQLNonNull } = require('graphql');
const Task = require('../models/task');

// Define the TaskType
const TaskType = new GraphQLObjectType({
  name: 'Task',
  fields: {
    _id: { type: GraphQLString },
    description: { type: GraphQLString },
    completed: { type: GraphQLBoolean },
  },
});

// Define the RootQuery
const RootQuery = new GraphQLObjectType({
  name: 'Query',
  fields: {
    tasks: {
      type: new GraphQLList(TaskType),
      resolve: () => Task.find(),
    },
  },
});

// Define the RootMutation
const RootMutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createTask: {
      type: TaskType,
      args: {
        description: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: (_, args) => {
        const task = new Task({
          description: args.description,
          completed: false,
        });
        return task.save();
      },
    },
    updateTask: {
      type: TaskType,
      args: {
        _id: { type: new GraphQLNonNull(GraphQLString) },
        completed: { type: GraphQLBoolean },
      },
      resolve: (_, args) => {
        return Task.findByIdAndUpdate(args._id, { completed: args.completed }, { new: true });
      },
    },
  },
});

module.exports = {
  TaskType,
  RootQuery,
  RootMutation,
};