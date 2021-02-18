const Task = (title, description, dueDate, priority, id=0) => {
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
        completed,
        id
    }
}

export default Task