import {store} from "../../index";
import {gameLevel, gameScore, refreshGrid} from "../../actions";

import { setAnim, setLoop } from "../index";

let count = 0;
let lastAnim = 0;

export const rowDestruction = (tempGrid, gameGrid) =>{
    const rowDestructionAnimation = (timestamp) => {
        let currentFrame = timestamp;
        if(count < 7 && currentFrame - lastAnim >= 100){
            if(count % 2 !== 0 && count < 6) store.dispatch(refreshGrid(tempGrid));
            else if (count < 6) store.dispatch(refreshGrid(gameGrid.grid));
            lastAnim = currentFrame;
            count++;
            requestAnimationFrame(rowDestructionAnimation);
        }else if (count >= 7){
            gameGrid.handleRowDestruction();
            store.dispatch(refreshGrid(gameGrid.grid));
            store.dispatch(gameScore(gameGrid.score));
            store.dispatch(gameLevel(gameGrid.level));
            count = 0;
            setAnim(false);
            setLoop();
        }else if (count < 7){
            requestAnimationFrame(rowDestructionAnimation);
        }
    };
    requestAnimationFrame(rowDestructionAnimation);
};