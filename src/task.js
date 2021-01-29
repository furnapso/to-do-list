const Task = (title, description, dueDate, priority) => {
    const updateTitle = (newTitle) => title = newTitle;
    const updateDescription = (newDescription) => description = newDescription;

    return {
        updateTitle,
        updateDescription,
        title,
        description,
        dueDate,
        priority
    }
}

export default Task