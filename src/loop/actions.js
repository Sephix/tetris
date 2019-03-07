import Cell from "../game/Cell";
import {gameState, anim, setAnim} from "./index";

import {store} from "../index";
import {
    gameLost,
    refreshGrid,
    refreshNextCell,
    refreshSavedCell
} from "../actions";

import {lostAnimation} from "./animations/lostAnimation";
import {rowDestruction} from "./animations/rowDestruction";

//Handles cell move, and controls game state
export const game = (move) => {
    if(gameState.isStarted){
        if (!gameState.gameGrid.lost && !gameState.isPaused && !gameState.gameGrid.lost && !anim) {
            if (!gameState.cell.isAlive && !gameState.gameGrid.lost) {
                gameState.cell = gameState.nextCell;
                gameState.nextCell = new Cell();
                store.dispatch(refreshNextCell(gameState.nextCell.cell));
            }
            if (gameState.cell) {
                switch (move) {
                    case 'a':
                        if (gameState.isSavedCell) {
                            let tempCell = gameState.savedCell;
                            gameState.savedCell = gameState.cell;
                            gameState.cell = tempCell;
                            gameState.savedCell.resetRow();
                        } else {
                            gameState.gameGrid.wipeActiveGrid();
                            gameState.savedCell = gameState.cell;
                            gameState.savedCell.resetRow();
                            gameState.cell = gameState.nextCell;
                            gameState.nextCell = new Cell();
                            gameState.isSavedCell = true;
                            store.dispatch(refreshNextCell(gameState.nextCell.cell));
                        }
                        store.dispatch(refreshSavedCell(gameState.savedCell.cell));
                        break;
                    case 's':
                    case 'DOWN':
                        gameState.cell.moveDown(gameState.gameGrid);
                        break;
                    case 'd':
                    case 'RIGHT':
                        gameState.cell.moveRight(gameState.gameGrid.deadGrid);
                        break;
                    case 'q':
                    case 'LEFT':
                        gameState.cell.moveLeft(gameState.gameGrid.deadGrid);
                        break;
                    case 'z':
                    case 'ROTATE':
                        gameState.cell.rotate(gameState.gameGrid.deadGrid);
                        break;
                    default:
                }
            }
            if (gameState.gameGrid.lost) {
                store.dispatch(gameLost());
                setTimeout(() => lostAnimation(gameState.gameGrid.grid),250);
            }
            gameState.gameGrid.renderCelltoGrid(gameState.cell);
            if (!gameState.cell.isAlive) {
                if (gameState.gameGrid.shouldGridDestruct()) {
                    rowDestruction(gameState.gameGrid.getTempGrid(), gameState.gameGrid);
                    setAnim(true);
                }
            }
            store.dispatch(refreshGrid(gameState.gameGrid.grid));
        }
    }
};
