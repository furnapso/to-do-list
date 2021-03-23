import "./styles.css";
import "fomantic-ui";
import {render} from "lit-html";

import Board from "./board";
import UI from "./ui.js";

Board.projects[0].addTask("New task", "Task description", new Date(), 1);
Board.projects[0].addTask("New task", "Task description", new Date(), 1);
Board.activeProject()._tasks[0].completed = true;
UI(Board).drawTasks();