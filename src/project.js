import Task from "./task";

const Project = (title, description) => {
    let title = title;
    let description = description;
    let tasks = [];

    const getTitle = () => title;
    const updateTitle = (newTitle) => title = newTitle;
    const getDescription = () => description;
    const updateDescription = (newDescription) => description = newDescription;

    const addTask = (title, description, dueDate, priority) => {
        tasks.push(Task(title, description, dueDate, priority));
    }
    const getTasks = () => tasks;

    return {
        getTitle, updateTitle, getDescription, updateDescription, addTask, getTasks
    }
}

export default Project