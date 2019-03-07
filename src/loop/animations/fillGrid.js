import {store} from "../../index";
import { refreshGrid } from "../../actions";

import {HEIGHT, WIDTH} from "../../game/settings";

const cell = "black";

export const fillGrid = (gameGrid, seq) =>{
    let tempGrid = gameGrid;
    let row = HEIGHT-1;
    let lastAnim = 0;
    const fillGridAnimation = (timestamp) => {
        let currentFrame = timestamp;
        if(row >= 0) {
            if (currentFrame - lastAnim > 0){
                lastAnim = currentFrame;
                for(let i = 0; i < WIDTH; i++){
                    tempGrid[row][i] = cell;
                }
                store.dispatch(refreshGrid(tempGrid));
                row--;
                if (row === -1) seq();
            }
            requestAnimationFrame(fillGridAnimation);
        }
    };
    requestAnimationFrame(fillGridAnimation);
};
