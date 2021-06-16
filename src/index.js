import "./styles.css";
import "fomantic-ui";
import {render} from "lit-html";

import Board from "./board";
import UI from "./ui.js";

let storage = window.localStorage;

if (storage.getItem('board') !== null){
    Board = JSON.parse(storage.getItem('board'))
}

else {
    Board.projects[0].addTask("New task", "Task description", new Date(), 1);
    Board.projects[0].addTask("New task", "Task description", new Date(), 1);
    Board.activeProject()._tasks[0].completed = true;
}

UI(Board).draw();

window.setInterval(() => {
    console.log('Saving to local storage')
    storage.setItem('board', JSON.stringify(Board))
}, 3000);