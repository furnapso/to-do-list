import "./styles.css";
import "fomantic-ui";

import Board from "./board";
import UI from "./ui.js";

const storage = window.localStorage;
let board;

function observe(obj) {
    const handler = {
        get(target, propKey, receiver) {
            const origMethod = obj[propKey];
            if (typeof(origMethod) == 'function') {
                return function (...args) {
                    let result = origMethod.apply(this, args);
                    storage.setItem('board', JSON.stringify(this));
                    return result
                };
            }

            else {
                return origMethod
            }
        }
    };

    return new Proxy(obj, handler);
}

if (storage.getItem('board') === null) {
    board = observe(Board());
}

else {
    board = JSON.parse(storage.getItem('board'));
}

UI(board).draw();