import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLNonNull,
} from "graphql";
import { Task } from "../models/task";

// Define the Task type
const TaskType = new GraphQLObjectType({
  name: "Task",
  fields: {
    id: { type: GraphQLString },
    description: { type: GraphQLString },
    completed: { type: GraphQLBoolean },
  },
});

// define the rootQuery
const RootQuery = new GraphQLObjectType({
  name: "Query",
  fields: {
    tasks: {
      type: new GraphQLList(TaskType),
      resolve: () => Task.find(),
    },
  },
});

// define the root mutation
const RootMutation = new GraphQLObjectType({
  name: "Mutation",
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
        id: { type: new GraphQLNonNull(GraphQLString) },
        completed: { type: GraphQLBoolean },
      },
      resolve: (_, args) => {
        return Task.findByIdAndUpdate(
          args.id,
          { completed: args.completed },
          { new: true }
        );
      },
    },
  },
});


export default {TaskType, RootQuery, RootMutation}