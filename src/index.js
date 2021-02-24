import "./styles.css";
import "fomantic-ui";
import {render} from "lit-html";

import Board from "./board";
import UI from "./ui";

console.log(Board.projects);
Board.projects[0].addTask("New task", "Task description", new Date(), 1);
UI.drawTasks(Board.projects[0]._tasks)
UI.drawProjects(Board.projects)