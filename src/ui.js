const UserInterface = (() => {
    const projects = document.querySelector("#projects");
    const addNewProjectBtn = document.querySelector("#add-new-project");
    const projectTitle = document.querySelector("#project-title");

    const components = {
        task: (task) => {
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = `
            <div id='task' class='ui segment'>
                <input type='checkbox' class='ui checkbox circular'>
                <div class='task-title'>${task.title}</div>
                <span id='actions' class='hidden'>
                    <i class='icon delete'></i>
                </span>
            </div>`

            const div = tempDiv.firstElementChild;
            
            div.addEventListener('mouseover', (e) => {
                e.target.querySelector("#actions").classList.remove("hidden");
            })

            div.addEventListener('mouseleave', e => {
                e.target.querySelector("#actions").classList.add("hidden");
            })
            
            return div;
        }
    }

    return {projects, addNewProjectBtn, projectTitle, components}
})();


export default UserInterface