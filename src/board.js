import Project from "./project"

const Board = () => {
    let projects = [];
    
    const addProject = (title, description) => {
        projects.push(Project(title, description))
    }
    
    return {
        projects, addProject
    }
}

export default Board;