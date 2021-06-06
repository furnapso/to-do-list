import Project from "./project"
import generateRandomId from "./random";

const Board = (() => {
    let projects = [];
    let _activeProject = 0;

    const activeProject = () => {
        return projects.filter(i => i.active == true)[0];
    }
    
    const addProject = (title, description) => {
        projects.push(Project(title, description, generateRandomId(projects)))
    }

    const updateProject = (title, id) => {
        const projectToUpdate = projects.filter(i => i.id == id)[0];
        projectToUpdate.title = title;
    }

    const changeActiveProject = (id) => {
        const currentlyActiveProject = projects.filter(i => i.active == true)[0];
        const projectToUpdate = projects.filter(i => i.id == id)[0];
        projectToUpdate.active = true;
        currentlyActiveProject.active = false;

    /* create default project */
    addProject("Default Project", "This is the default starting project", true);
    
    return {
        projects, addProject, activeProject, updateProject, changeActiveProject
    }
}})();

export default Board;