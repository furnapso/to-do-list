const Project = (title, description) => {
    let title = title;
    let description = description;
    let tasks = [];

    const getTitle = () => title;
    const updateTitle = (newTitle) => title = newTitle;
    const getDescription = () => description;
    const updateDescription = (newDescription) => description = newDescription;

    return {
        getTitle, updateTitle, getDescription, updateDescription
    }
}

export default Project