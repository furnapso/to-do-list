const Task = (title, description, dueDate, priority, id) => {
    const updateTitle = (newTitle) => title = newTitle;
    const updateDescription = (newDescription) => description = newDescription;
    let completed = false;

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