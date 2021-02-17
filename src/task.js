const Task = (title, description, dueDate, priority) => {
    const updateTitle = (newTitle) => title = newTitle;
    const updateDescription = (newDescription) => description = newDescription;
    let completed = False;

    return {
        updateTitle,
        updateDescription,
        title,
        description,
        dueDate,
        priority,
        completed
    }
}

export default Task