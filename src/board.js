import Project from "./project";
import generateRandomId from "./random";

const Board = () => {
    let projects = [];

    const activeProject = () => {
        return projects.filter(i => i.active == true)[0];
    }
    
    const addProject = (title, description, active) => {
        projects.push(Project(title, description, generateRandomId(projects), active));
    }

    const updateProject = (title, id) => {
        const projectToUpdate = projects.filter(i => i.id == id)[0];
        projectToUpdate.title = title;
    }

    const deleteProject = (id) => {
        if (projects.length === 1) {
            throw 'You cannot delete the only project'
        }
        
        const projectToDelete = projects.filter(p => p.id === id);
        projects = projects.filter(p => p.id !== id);
        if (projectToDelete.active && projects.length > 0) {
            projects[0].active = true;
        }
    }

    const changeActiveProject = (id) => {
        const currentlyActiveProject = projects.filter(i => i.active == true)[0];
        const projectToUpdate = projects.filter(i => i.id == id)[0];
        if (currentlyActiveProject.id != projectToUpdate.id) {
            projectToUpdate.active = true;
            currentlyActiveProject.active = false;
        }
    }

    /* create default project */
    if (projects.length == 0) {
        addProject('Default Project', 'This is the default starting project', true)
    }
    
    return {
        projects, addProject, activeProject, updateProject, changeActiveProject, deleteProject
    }
};

export default Board;