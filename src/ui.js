const UserInterface = (() => {
    const projects = document.querySelector("#projects");
    const addNewProjectBtn = document.querySelector("#add-new-project");
    const projectTitle = document.querySelector("#project-title");

    const components = {
        task: (task) => {
            const div = `<div id='task' class='ui segment'>
            <input type='checkbox' class='ui checkbox circular'>
            <div class='task-title'>${task.Title}</div>
            <span id='actions' class='hidden'>
                <i class='icon delete'></i>
            </span>`
            div.addEventListener('mouseover', (e) => {
                e.target.querySelector("#actions").classList()
            })
        }
    }

    return {projects, addNewProjectBtn, projectTitle, components}
})();


export default UserInterface