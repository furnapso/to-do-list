// @ts-check
import Task from "./task";

/**
 * @param {string} title Project title
 * @param {string} description Project description
 */
const Project = (title, description) => ({
    title: title,
    description: description,
    _tasks: [],
    _acceptedUpdates: ['title', 'description'],

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
        this._tasks.push(Task(title, description, dueDate, priority));
    },

    /**
     * @param {Object} updateObj Update object in format {field: new value}. Accepts title & description
     */
    updateProject(updateObj) {
        const invalidUpdates = [];
        const validUpdates = [];
        for (let item in updateObj) {
            if (this._acceptedUpdates.includes(item)) {
                validUpdates.push(item)
            }
            else {
                invalidUpdates.push(item)
            }
        }

        if (invalidUpdates.length > 0) {
            let exceptionString = ''
        }

    }
})

export default Project