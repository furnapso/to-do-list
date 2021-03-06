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
        render(projectsDiv, projectsContainer)
        projectTitle.innerText = Board.activeProject().title;
    }

    const addNewTask = () => {
        Board.activeProject().addTask("", "");
        drawTasks();
    }

    const addNewProject = () => {
        Board.addProject("New Project");
        drawProjects();
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
                let newTitle = e.target.value;
                let id = parseInt(e.target.dataset.id);
                Board.activeProject().updateTask(id, newTitle);
                console.log(newTitle);
            }

            const div = tasks.map(task => html`
            <div id='task' class='ui segment ${task.completed ? 'strike' : ''}' @mouseover=${taskEventHandler} @mouseleave=${taskEventHandler}>
                <input type='checkbox' class='ui checkbox' data-id='${task.id}' ?checked=${task.completed} @click=${checkboxEventHandler}>
                <input type='text' data-id='${task.id}' @input=${updateEventHandler} .value='${task.title}'>
                <span id='actions' class='hidden actions'>
                    <i class='icon delete' data-id='${task.id}' @click=${deleteEventHandler}></i>
                </span>
            </div>`);

            return div
        },

        projects: (projects) => {
            let editingEnabled = false;

            const deleteProject = e => {
                const id = e.target.getAttribute('data-id');
                try {
                    Board.deleteProject(id);
                } catch (error) {
                    alert(error);
                }
                console.log(Board.projects);
                draw();
            }

            const editMode = e => {
                const projectId = e.target.getAttribute('data-id');
                const projectTextBox = document.querySelector(`input[data-id='${projectId}']`);
                
                if (Array.from(e.target.classList).includes("edit")) {
                    projectTextBox.removeAttribute('readonly');
                    projectTextBox.focus();
                    e.target.classList.remove('edit', 'outline');
                    e.target.classList.add('check');
                    editingEnabled = true;
                }

                else if (Array.from(e.target.classList).includes("check")) {
                    projectTextBox.setAttribute('readonly', 'true');
                    Board.updateProject(projectTextBox.value, projectId);
                    e.target.classList.remove('check');
                    e.target.classList.add('edit', 'outline');
                    editingEnabled = false;
                    draw();
                }
            }

            const changeActive = e => {
                if (!editingEnabled) {
                    let projectId
                    if (e.target.tagName == 'DIV') {
                        projectId = e.target.querySelector("input").getAttribute('data-id');
                    }

                    else {
                        projectId = e.target.getAttribute('data-id');
                    }

                    Board.changeActiveProject(projectId);
                    draw();
                }
            }

            const div = projects.map(project => html`
                <div class='item ${project.active ? 'active blue' : ''}' id='project'>
                    <input type='text' readonly="true" .value='${project.title}' data-id=${project.id}  @click=${changeActive}>
                    <i class="edit outline icon" data-id='${project.id}' @click=${editMode}></i>
                    <i class='trash alternate outline icon' data-id='${project.id}' @click=${deleteProject}></i>
                </div>
            `)

            return div
        }
    }

    const draw = () => {
        drawProjects();
        drawTasks();
    }

    addNewTaskBtn.addEventListener('click', addNewTask);
    addNewProjectBtn.addEventListener('click', addNewProject);

    return {projects, addNewProjectBtn, projectTitle, components, draw}
})();


export default UserInterface