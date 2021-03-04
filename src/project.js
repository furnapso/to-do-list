// @ts-check
import Task from "./task";

/**
 * @param {string} title Project title
 * @param {string} description Project description
 * @param {Number} id Project ID
 */
const Project = (title, description, id) => ({
    title: title,
    description: description,
    _tasks: [],
    id: id,

    getTasks() {
        return this._tasks;
    },

    /**
     * @param {string} title New task title
     * @param {string} description New task description
     * @param {Date} dueDate New task due date - defaults to today
     * @param {Number} priority - New task priority - defaults to 1
     */
    addTask(title, description, dueDate, priority) {
        this._tasks.push(Task(title, description, dueDate, priority, this._tasks.length));
    },

    /**
     * 
     * @param {Number} id Task ID 
     */
    deleteTask(id) {
        this._tasks.splice(id - 1, 1)
    },

    updateTask(id, title, dueDate, priority) {
        let task = this._tasks[id - 1];
        task.title = title ? title : task.title;
        task.dueDate = dueDate ? dueDate : task.dueDate;
        task.priority = priority ? priority : task.priority;
    }
})

export default Project