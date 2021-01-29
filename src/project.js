import Task from "./task";

const Project = (title, description) => {
    let tasks = [];

    const updateTitle = (newTitle) => title = newTitle;
    const updateDescription = (newDescription) => description = newDescription;

    const addTask = (title, description, dueDate, priority) => {
        tasks.push(Task(title, description, dueDate, priority));
    }

    return {
        tasks, title, description, updateTitle, updateDescription, addTask
    }
}

export default Project