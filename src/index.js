import "./styles.css";
import "fomantic-ui";
import Board from "./board";
import UI from "./ui";

console.log(Board.projects);
Board.projects[0].addTask("New task", "Task description", new Date(), 1);
let mydiv = UI.components.task(Board.projects[0]._tasks[0]);
document.querySelector("#tasks").appendChild(mydiv);