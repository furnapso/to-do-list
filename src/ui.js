import {html, render} from "lit-html";

const UserInterface = Board => (() => {
    const projectsContainer = document.querySelector("#projects");
    const addNewProjectBtn = document.querySelector("#add-new-project");
    const projectTitle = document.querySelector("#project-title");
    const tasksContainer = document.querySelector("#tasks");

    const drawTasks = () => {
        const tasksDiv = components.tasks(Board.activeProject()._tasks);
        render(tasksDiv, tasksContainer);
    }

    const drawProjects = () => {
        const projectsDiv = components.projects(Board.projects);
        render(projectsDiv, projectsContainer);
    }

    const components = {
        tasks: (tasks) => {
            const taskEventHandler = e => {
                switch(e.type) {
                    case "mouseover":
                        e.target.querySelector("#actions").classList.remove('hidden');
                        break;
                    case "mouseleave":
                        e.target.querySelector("#actions").classList.add('hidden');
                        break
                }
            }

            const deleteEventHandler = e => {
                const id = Number(e.target.getAttribute('data-id'));
                Board.activeProject().deleteTask(id);
                drawTasks();
            }

            const div = tasks.map(task => html`
            <div id='task' class='ui segment' @mouseover=${taskEventHandler} @mouseleave=${taskEventHandler}>
                <input type='checkbox' class='ui checkbox'>
                <div class='task-title'>${task.title}</div>
                <span id='actions' class='hidden actions'>
                    <i class='icon delete' data-id='${task.id}' @click=${deleteEventHandler}></i>
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