import Grid from '../game/Grid';
import Cell from "../game/Cell";

const gameGrid = new Grid();
let cell = new Cell();
gameGrid.addCell();

export const Game = (move) => {
    if(!cell.isAlive) cell = new Cell();
    switch (move) {
        case 'DOWN':
            cell.moveDown(gameGrid.deadGrid);
            break;
        case 'RIGHT':
            cell.moveRight(gameGrid.deadGrid);
            break;
        case 'LEFT':
            cell.moveLeft(gameGrid.deadGrid);
            break;
        default:
    }
    gameGrid.renderCelltoGrid(cell);
    let { grid } = gameGrid;
    return [...grid];
};