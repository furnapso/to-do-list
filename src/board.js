import Project from "./project"

const Board = (() => {
    let projects = [];
    
    const addProject = (title, description) => {
        projects.push(Project(title, description))
    }

    /* create default project */
    addProject("Default Project", "This is the default starting project");
    
    return {
        projects, addProject
    }
})();

export default Board;