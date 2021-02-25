import {html, render} from "lit-html";

const UserInterface = (() => {
    const projectsContainer = document.querySelector("#projects");
    const addNewProjectBtn = document.querySelector("#add-new-project");
    const projectTitle = document.querySelector("#project-title");
    const tasksContainer = document.querySelector("#tasks");

    const drawTasks = (tasks) => {
        const tasksDiv = components.tasks(tasks);
        render(tasksDiv, tasksContainer);
    }

    const drawProjects = (projects) => {
        const projectsDiv =components.projects(projects);
        render(projectsDiv, projectsContainer)
    }

    const components = {
        tasks: (tasks) => {
            const eventHandler = e => {
                switch(e.type) {
                    case "mouseover":
                        e.target.querySelector("#actions").classList.remove('hidden');
                        break;
                    case "mouseleave":
                        e.target.querySelector("#actions").classList.add('hidden');
                        break
                }
            }

            const div = tasks.map(task => html`
            <div id='task' class='ui segment' @mouseover=${eventHandler} @mouseleave=${eventHandler}>
                <input type='checkbox' class='ui checkbox'>
                <div class='task-title'>${task.title}</div>
                <span id='actions' class='hidden actions'>
                    <i class='icon delete'></i>
                </span>
            </div>`);

            return div
        },

        projects: (projects) => {
            const div = projects.map(project => html`
                <div class='item'>${project.title}</div>
            `)

            return div
        }
    }

    return {projects, addNewProjectBtn, projectTitle, components, drawTasks, drawProjects}
})();


export default UserInterface