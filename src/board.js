import Project from "./project"
import generateRandomId from "./random";

const Board = (() => {
    let projects = [];
    let _activeProject = 0;

    const activeProject = () => {
        if (projects.length > 0) {
            return Board.projects[_activeProject]
        }
    }
    
    const addProject = (title, description) => {
        projects.push(Project(title, description, generateRandomId(projects)))
    }

    /* create default project */
    addProject("Default Project", "This is the default starting project");
    
    return {
        projects, addProject, activeProject
    }
})();

export default Board;