import Project from "project"

const board = () => {
    let projects = [];

    const getProjects = () => projects;
    const addProject = (title, description) => {
        projects.push(Project(title, description))
    }
    
    return {
        getProjects, addProject
    }
}

export default board;