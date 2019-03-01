import Grid from '../game/Grid';
import Cell from "../game/Cell";
import {blank} from "./../game/cellCollection";

import { refreshGrid, refreshNextCell, refreshSavedCell } from "../actions";
import { store } from "../index";

const gameGrid = new Grid();
let cell = new Cell();
let nextCell = new Cell();
let savedCell = {cell: blank};
let isSavedCell = false;
let isStarted = false;
gameGrid.addCell();

let last = 0;

const loop = (timestamp) =>{
    let dif = gameGrid.level < 10 ? gameGrid.level*120 : 100;
    if(cell){
        let current = timestamp;
        if(current - last > 1200 - dif){
            game('DOWN');
            last = current;
        }
        requestAnimationFrame(loop);
    }
};

export const start = () => {
    isStarted = true;
    requestAnimationFrame(loop);
};

const game = (move) => {
    if (!cell.isAlive) {
        cell = nextCell;
        nextCell = new Cell(gameGrid.deadGrid);
    }
    if (cell && isStarted) {
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
                    cell = new Cell(gameGrid.deadGrid);
                    isSavedCell = true;
                }
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
    if (!cell.isAlive) gameGrid.handleRowDestruction();
    store.dispatch(refreshGrid(gameGrid.grid));
    store.dispatch(refreshNextCell(nextCell.cell));
    store.dispatch(refreshSavedCell(savedCell.cell));
};

export default game;
