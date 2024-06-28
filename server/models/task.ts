import mongoose from "../db"

const taskSchema = new mongoose.Schema({
    description: { type: String, required: true },
    completed: { type: Boolean, default: false },
});

export const Task = mongoose.model("Task", taskSchema);