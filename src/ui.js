import {html, render} from "lit-html";
import Board from "./board";

/**
 * 
 * @param {Board} Board Board object
 * @returns None
 */
const UserInterface = Board => (() => {
    const projectsContainer = document.querySelector("#projects");
    const addNewProjectBtn = document.querySelector("#add-new-project");
    const addNewTaskBtn = document.querySelector("#add-new-task");
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

    const addNewTask = () => {
        Board.activeProject().addTask("", "");
        drawTasks();
    }

    const components = {
        tasks: (tasks) => {
            const taskEventHandler = e => {
                if (e.target.id == "task") {
                    switch(e.type) {
                        case "mouseover":
                            e.target.querySelector("#actions").classList.remove('hidden');
                            break;
                        case "mouseleave":
                            e.target.querySelector("#actions").classList.add('hidden');
                            break
                    }
                }
            }

            const deleteEventHandler = e => {
                const id = Number(e.target.getAttribute('data-id'));
                Board.activeProject().deleteTask(id);
                drawTasks();
            }

            const checkboxEventHandler = e => {
                e.target.parentElement.classList.toggle("strike");
                const id = Number(e.target.getAttribute('data-id'));
                Board.activeProject().toggleTaskCompletion(id);
                console.log(Board.activeProject());
                drawTasks();
            }

            const updateEventHandler = e => {
                let newTitle = e.target.innerText;
                let id = parseInt(e.target.dataset.id);
                Board.activeProject().updateTask(id, newTitle);
                console.log(newTitle);
            }

            const div = tasks.map(task => html`
            <div id='task' class='ui segment ${task.completed ? 'strike' : ''}' @mouseover=${taskEventHandler} @mouseleave=${taskEventHandler}>
                <input type='checkbox' class='ui checkbox' data-id='${task.id}' ?checked=${task.completed} @click=${checkboxEventHandler}>
                <input type='text' class='task-title' contenteditable="true" data-id='${task.id}' @input=${updateEventHandler} value='${task.title}'>
                <span id='actions' class='hidden actions'>
                    <i class='icon delete' data-id='${task.id}' @click=${deleteEventHandler}></i>
                </span>
            </div>`);

            return div
        },

        projects: (projects) => {
            const div = projects.map(project => html`
                <div class='item ${project.active ? 'active blue' : ''}'>${project.title}</div>
            `)

            return div
        }
    }

    const draw = () => {
        drawTasks();
        drawProjects();
    }

    addNewTaskBtn.addEventListener('click', addNewTask);

    return {projects, addNewProjectBtn, projectTitle, components, draw}
})();


export default UserInterface