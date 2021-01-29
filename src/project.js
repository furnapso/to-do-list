// @ts-check
import Task from "./task";

const Project = (title, description) => ({
    title: title,
    description: description,
    _tasks: [],

    addTask(title, description, dueDate, priority) {
        this._tasks.push(Task(title, description, dueDate, priority));
    },

    updateProject(update) {
        for (let item in update) {
            if (Object.keys(this).includes(item)) {
                this[item] = update[item];
            }
        }
    }
})

export default Project