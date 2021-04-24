import Project from "./project"

const Board = (() => {
    let projects = [];
    let _activeProject = 0;

    const activeProject = () => {
        if (projects.length > 0) {
            return Board.projects[_activeProject]
        }
    }
    
    const addProject = (title, description, active) => {
        projects.push(Project(title, description, projects.length, active))
    }

    /* create default project */
    addProject("Default Project", "This is the default starting project", true);
    
    return {
        projects, addProject, activeProject
    }
})();

export default Board;