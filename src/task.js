const Task = (title, description, dueDate, priority, id, completed = false) => {
    const updateTitle = (newTitle) => title = newTitle;
    const updateDescription = (newDescription) => description = newDescription;

    return {
        updateTitle,
        updateDescription,
        title,
        description,
        dueDate,
        priority,
        completed,
        id
    }
}

export default Task