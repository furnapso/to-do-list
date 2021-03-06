import Project from "./project";
import Task from "./task";
import generateRandomId from "./random";

const Board = (data) => {
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
        
        const projectToDelete = projects.filter(p => p.id == id)[0];
        const projectIndex = projects.indexOf(projectToDelete);

        if (projectToDelete.active && projects.length > 0) {
            changeActiveProject(projects[0].id);
        }
        
        projects.splice(projectIndex, 1);
    }

    const changeActiveProject = (id) => {
        const currentlyActiveProject = projects.filter(i => i.active == true)[0];
        const projectToUpdate = projects.filter(i => i.id == id)[0];
        if (currentlyActiveProject.id != projectToUpdate.id) {
            projectToUpdate.active = true;
            currentlyActiveProject.active = false;
        }
    }

    if (data) {
        data.projects.forEach(project => {
            const newProject = Project(project.title, project.description, project.id, project.active);

            project._tasks.forEach(task => {
                newProject._tasks.push(Task(task.title, task.description, task.dueDate, task.priority, task.id, task.completed));
            })

            projects.push(newProject);
        })
    }

    /* create default project */
    else {
        addProject('Default Project', 'This is the default starting project', true)
    }
    
    return {
        projects, addProject, activeProject, updateProject, changeActiveProject, deleteProject
    }
};

export default Board;