import Grid from "../game/Grid";
import Cell from "../game/Cell";
import {blank} from "../game/cellCollection";

import {store} from "../index";
import {gamePaused, gameRestart, gameStarted, refreshNextCell} from "../actions";

import {game} from "./actions";
import {events} from "./keybind";
import {fillInFillOut} from "./animations/fillInFillOut";

//Contains all essential variables in an object
export const gameState = {
    gameGrid: null,
    cell: null,
    nextCell: null,
    isSavedCell: null,
    isStarted: null,
    isPaused: null
};
//Set initial values
const setInitValues = () => {
    gameState.gameGrid = new Grid();
    gameState.cell = new Cell();
    gameState.nextCell = new Cell();
    gameState.savedCell = {cell: blank};
    gameState.isSavedCell = false;
    gameState.isStarted = false;
    gameState.isPaused = false;
    gameState.gameGrid.addCell();
};

//Reset the game
export const reset = () => {
    setInitValues();
    store.dispatch(gameRestart());
    fillInFillOut(gameState.gameGrid.grid, anim, setAnim);
};

//Animation variable, set to true if there is an animation running
export let anim = false;
export const setAnim = (value) =>{
    anim = value;
};

//Main game loop, move down current cell based on current level
let last = 0;
const loop = (timestamp) =>{
    let dif = gameState.gameGrid.level < 10 ? gameState.gameGrid.level*120 : 1080;
    if(gameState.cell && !gameState.isPaused && !anim && !gameState.gameGrid.lost){
        let current = timestamp;
        if(current - last > 1200 - dif){
            game('DOWN');
            last = current;
        }
        requestAnimationFrame(loop);
    }
};
//Starts game loop
export const setLoop = () =>{
    requestAnimationFrame(loop);
};

//Start sequence function, resume if paused
export const start = () => {
    if(!gameState.isStarted){
        setInitValues();
        gameState.isStarted = true;
        store.dispatch(refreshNextCell(gameState.nextCell.cell));
        store.dispatch(gameStarted());
        events();
        requestAnimationFrame(loop);
    }
    else if(gameState.isPaused) paused();
};

//Set game to pause or resume if paused
export const paused = () => {
    if(gameState.isStarted){
        if(gameState.isPaused){
            gameState.isPaused = false;
            requestAnimationFrame(loop);
            store.dispatch(gameStarted());
        }
        else {
            gameState.isPaused = true;
            store.dispatch(gamePaused());
        }
    }
};
