import {Task} from "../models/task";
import { ObjectId } from 'mongodb';

interface TaskInterface{
    _id: ObjectId | string;
    description: string;
    completed: boolean;
}


// resolver function to get all tasks
async function getAllTasks(): Promise<TaskInterface[]> {
    return await Task.find();
  }

//   resolver function to create a new task
async function createTask(_: any, args:{description : string}): Promise<TaskInterface |null>{
    const task= new Task({
        description: args.description,
        completed: false,
    });
    return await task.save();
}

// resolver function to update an existing task
async function updateTask(_:any, args:{id:ObjectId|string, completed: boolean}): Promise<TaskInterface | null>{
    const {id, completed}= args;
    return await Task.findByIdAndUpdate(id, {completed}, {new: true});
}

export default {createTask, getAllTasks, updateTask}