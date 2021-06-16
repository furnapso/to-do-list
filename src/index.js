import "./styles.css";
import "fomantic-ui";

import Board from "./board";
import UI from "./ui.js";

let storage = window.localStorage;
let board;

if (storage.getItem('board') === null) {
    board = Board();
}

else {
    board = JSON.parse(storage.getItem('board'));
}

UI(board).draw();

window.setInterval(() => {
    storage.setItem('board', JSON.stringify(board))
}, 3000);