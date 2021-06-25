import "./styles.css";
import "fomantic-ui";

import Board from "./board";
import UI from "./ui.js";
import { set } from "date-fns";

const storage = window.localStorage;

function saveToStorage() {
    storage.setItem('board', JSON.stringify(board));
}

let board;

if (storage.getItem('board')) {
    const savedData = JSON.parse(storage.getItem('board'));
    board = Board(savedData);
}

else {
    board = Board();
}

['mouseover', 'scroll', 'keydown'].forEach(e => {
    document.addEventListener(e, saveToStorage)
})

UI(board).draw();