/*! For license information please see bundle.js.LICENSE.txt */
            <div id='task' class='ui segment ${e.completed?"strike":""}' @mouseover=${t} @mouseleave=${t}>
                <input type='checkbox' class='ui checkbox' data-id='${e.id}' ?checked=${e.completed} @click=${i}>
                <input type='text' data-id='${e.id}' @input=${a} .value='${e.title}'>
                <span id='actions' class='hidden actions'>
                    <i class='icon delete' data-id='${e.id}' @click=${o}></i>
                </span>
            </div>`))},projects:e=>{let t=!1;const o=e=>{const t=e.target.getAttribute("data-id");try{J.deleteProject(t)}catch(e){alert(e)}console.log(J.projects),d()},i=e=>{const o=e.target.getAttribute("data-id"),i=document.querySelector(`input[data-id='${o}']`);Array.from(e.target.classList).includes("edit")?(i.removeAttribute("readonly"),i.focus(),e.target.classList.remove("edit","outline"),e.target.classList.add("check"),t=!0):Array.from(e.target.classList).includes("check")&&(i.setAttribute("readonly","true"),J.updateProject(i.value,o),e.target.classList.remove("check"),e.target.classList.add("edit","outline"),t=!1,d())},a=e=>{if(!t){let t;t="DIV"==e.target.tagName?e.target.querySelector("input").getAttribute("data-id"):e.target.getAttribute("data-id"),J.changeActiveProject(t),d()}};return e.map((e=>O`
                <div class='item ${e.active?"active blue":""}' id='project'>
                    <input type='text' readonly="true" .value='${e.title}' data-id=${e.id}  @click=${a}>
                    <i class="edit outline icon" data-id='${e.id}' @click=${i}></i>
                    <i class='trash alternate outline icon' data-id='${e.id}' @click=${o}></i>
                </div>
            `))}},d=()=>{r(),n()};return o.addEventListener("click",(()=>{J.activeProject().addTask("",""),n()})),t.addEventListener("click",(()=>{J.addProject("New Project"),r()})),{projects,addNewProjectBtn:t,projectTitle:i,components:m,draw:d}})()).draw()})()})();