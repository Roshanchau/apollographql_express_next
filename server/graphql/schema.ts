import { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLList , GraphQLNonNull } from "graphql";
import { Task } from "../models/task";

// Define the Task type
const TaskType= new GraphQLObjectType({
    name: "Task",
    fields: {
        id: { type: GraphQLString },
        description: { type: GraphQLString },
        completed: { type: GraphQLBoolean },
    }
});

// define the rootQuery
const RootQuery= new GraphQLObjectType({
    name: 'Query',
    fields:{
        tasks:{
            type: new GraphQLList(TaskType),
            resolve:()=> Task.find(),
        }
    }
})