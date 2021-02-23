import "./styles.css";
import "fomantic-ui";
import {render} from "lit-html";

import Board from "./board";
import UI from "./ui";

console.log(Board.projects);
Board.projects[0].addTask("New task", "Task description", new Date(), 1);
let mydiv = UI.components.tasks([Board.projects[0]._tasks[0], Board.projects[0]._tasks[0]]);
console.log(mydiv);
render(mydiv, document.querySelector("#tasks"));