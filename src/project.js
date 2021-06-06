// @ts-check
import Task from "./task";
import generateRandomId from "./random";

/**
 * @param {string} title Project title
 * @param {string} description Project description
 * @param {Number} id Project ID
 * @param {boolean} active Whether this project is the currently active project or not
 */
const Project = (title, description, id, active = false) => ({
    title: title,
    description: description,
    _tasks: [],
    id: id,
    active: active,

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
        this._tasks.push(Task(title, description, dueDate, priority, generateRandomId(this._tasks)));
    },

    /**
     * 
     * @param {Number} id Task ID 
     */
    deleteTask(id) {
        this._tasks.splice(id, 1)
    },

    updateTask(id, title, dueDate, priority, completed) {
        let task = this._tasks[id];
        task.title = title ? title : task.title;
        task.dueDate = dueDate ? dueDate : task.dueDate;
        task.priority = priority ? priority : task.priority;
        task.completed = completed ? completed : task.completed;
    },

    toggleTaskCompletion(id) {
        let task = this._tasks[id];
        task.completed = !task.completed;
    }
})

export default Project