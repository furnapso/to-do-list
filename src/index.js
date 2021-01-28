import "fomantic-ui";
import "./styles.css";
import Board from "./board";
import Project from "./project";
import Task from "./task";
import UserInterface from "./ui";

function createDefaultBoard() {
    const defaultBoard = Board();
    defaultBoard.addProject("Default Project", "This is the default starting project");
}