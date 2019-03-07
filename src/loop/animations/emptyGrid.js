import {store} from "../../index";
import { refreshGrid } from "../../actions";

import {BACKGROUND_COLOR, HEIGHT, WIDTH} from "../../game/settings";
const cell = BACKGROUND_COLOR;

export const emptyGrid = (gameGrid, seq) =>{
    let tempGrid = gameGrid;
    let lastAnim = 0;
    let row = 0;
    const fillGridAnimation = (timestamp) => {
        let currentFrame = timestamp;
        if(row < HEIGHT) {
            if (currentFrame - lastAnim > 0){
                lastAnim = currentFrame;
                for(let i = 0; i < WIDTH; i++){
                    tempGrid[row][i] = cell;
                }
                store.dispatch(refreshGrid(tempGrid));
                row++;
                if( row === HEIGHT ) seq();
            }
            requestAnimationFrame(fillGridAnimation);
        }
        else seq()
    };
    requestAnimationFrame(fillGridAnimation);
};
