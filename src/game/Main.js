import Grid from '../game/Grid';
import Cell from "../game/Cell";

const gameGrid = new Grid();
let cell = new Cell();
let nextCell = new Cell();
let savedCell = {cell :[[],[],[],[]]};
gameGrid.addCell();

let last = 0;

function mainLoop(timestamp){
    let dif = gameGrid.level < 10 ? gameGrid.level*120 : 100;
    if(cell){
        let current = timestamp;
        if(current - last > 1200 - dif){
            Game('DOWN');
            last = current;
        }
        requestAnimationFrame(mainLoop);
    }
}

export const start = () => requestAnimationFrame(mainLoop);

export function Game(move){
    if(!cell.isAlive) {
        cell = nextCell;
        nextCell = new Cell(gameGrid.deadGrid);
    }
    if(cell){
        switch (move) {
            case 'a':
                if (savedCell) {
                    let tempCell = savedCell;
                    savedCell = cell;
                    cell = tempCell;
                }
                else {
                    savedCell = cell;
                    cell = new Cell(gameGrid.deadGrid);
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
    if(!cell.isAlive) gameGrid.handleRowDestruction();
    return {...gameGrid, ...nextCell, savedCell };
}