import Grid from '../game/Grid';
import Cell from "../game/Cell";
import {blank} from "./../game/cellCollection";

import {
    refreshGrid,
    refreshNextCell,
    refreshSavedCell,
    gameStarted,
    gameLost,
    gamePaused,
    gameRestart,
    gameScore,
    gameLevel
} from "../actions";
import { store } from "../index";


let gameGrid = new Grid();
let cell = new Cell();
let nextCell = new Cell();
let savedCell = {cell: blank};
let isSavedCell = false;
let isStarted = false;
let isPaused = false;
gameGrid.addCell();

let keyPressedId = -1;
let lastKeyPressed = null;
function handleKeyPress(e){
    if(e.key === 'a' || e.key === 'z' || e.key === 'q' || e.key === 's' || e.key === 'd' ) {
        if (e.key !== lastKeyPressed) {
            handleKeyUp();
        }
        if (keyPressedId === -1) {
            lastKeyPressed = e.key;
            if(e.key !== 'a' && e.key !== 'z' ){
                game(e.key);
                keyPressedId = setInterval(() => game(e.key), 90);
            }else {
                lastKeyPressed = e.key;
                game(e.key);
                keyPressedId = 0;
            }
        }
    }
}
function handleKeyUp() {
    if(keyPressedId!==-1) {  //Only stop if exists
        clearTimeout(keyPressedId);
        keyPressedId=-1;
    }
}
const events = () => {
    document.onkeypress = handleKeyPress;
    document.onkeyup = handleKeyUp;
};


let last = 0;
const loop = (timestamp) =>{
    let dif = gameGrid.level < 10 ? gameGrid.level*120 : 100;
    if(cell && !isPaused){
        let current = timestamp;
        if(current - last > 1200 - dif){
            game('DOWN');
            last = current;
        }
        requestAnimationFrame(loop);
    }
};

export const start = () => {
    if(!isStarted){
        isStarted = true;
        store.dispatch(refreshNextCell(nextCell.cell));
        store.dispatch(gameStarted());
        events();
        requestAnimationFrame(loop);
    }
    else if(isPaused) paused();
};

export const paused = () => {
    if(isStarted){
        if(isPaused){
            isPaused = false;
            requestAnimationFrame(loop);
            store.dispatch(gameStarted());
        }
        else {
            isPaused = true;
            store.dispatch(gamePaused());
        }
    }
};

export const reset = () => {
    gameGrid = new Grid();
    cell = new Cell();
    nextCell = new Cell();
    savedCell = {cell: blank};
    isSavedCell = false;
    isStarted = false;
    isPaused = false;
    gameGrid.addCell();

    store.dispatch(gameRestart());
};

const game = (move) => {
    if (!cell.isAlive) {
        cell = nextCell;
        nextCell = new Cell(gameGrid.deadGrid);
        store.dispatch(refreshNextCell(nextCell.cell));
    }
    if (cell && isStarted && !isPaused && !gameGrid.lost) {
        switch (move) {
            case 'a':
                if (isSavedCell) {
                    let tempCell = savedCell;
                    savedCell = cell;
                    cell = tempCell;
                    savedCell.resetRow();
                } else {
                    gameGrid.wipeActiveGrid();
                    savedCell = cell;
                    savedCell.resetRow();
                    cell = nextCell;
                    nextCell = new Cell();
                    isSavedCell = true;
                    store.dispatch(refreshNextCell(nextCell.cell));
                }
                store.dispatch(refreshSavedCell(savedCell.cell));
                break;
            case 's':
            case 'DOWN':
                cell.moveDown(gameGrid);
                break;
            case 'd':
            case 'RIGHT':
                cell.moveRight(gameGrid.deadGrid);
                break;
            case 'q':
            case 'LEFT':
                cell.moveLeft(gameGrid.deadGrid);
                break;
            case 'z':
            case 'ROTATE':
                cell.rotate(gameGrid.deadGrid);
                break;
            default:
        }
    }
    gameGrid.renderCelltoGrid(cell);
    if (!cell.isAlive) {
        gameGrid.handleRowDestruction();
        store.dispatch(gameScore(gameGrid.score));
        store.dispatch(gameLevel(gameGrid.level));
    }
    store.dispatch(refreshGrid(gameGrid.grid));
    if(gameGrid.lost) store.dispatch(gameLost());
};

export default game;
