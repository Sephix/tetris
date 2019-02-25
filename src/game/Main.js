import Grid from '../game/Grid';
import Cell from "../game/Cell";

const gameGrid = new Grid();
let cell = new Cell();
gameGrid.addCell();

let last = 0;
let fps = 60;

function mainLoop(timestamp){
    if(cell){
        let current = timestamp;
        if(current - last > 1000){
            Game('DOWN');
            last = current;
        }
        requestAnimationFrame(mainLoop);
    }
}

export const start = () => requestAnimationFrame(mainLoop);

export function Game(move){
    if(!cell.isAlive) {
        cell = new Cell(gameGrid.deadGrid);
    }
    if(cell){
        switch (move) {
            case 's':
            case 'DOWN':
                cell.moveDown(gameGrid.deadGrid);
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
    if(!cell.isAlive) gameGrid.handleRowDestruction();
    let { grid } = gameGrid;
    return [...grid];
}