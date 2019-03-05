import {store} from "../../index";
import { refreshGrid} from "../../actions";

import {HEIGHT, WIDTH} from "../../game/settings";

const cell = "black";

let row = 19;
let square = 0;
let lastAnim = 0;
export const fillGrid = (gameGrid) =>{
    let tempGrid = gameGrid;
    const fillGridAnimation = (timestamp) => {
        let currentFrame = timestamp;
        if(row < HEIGHT && currentFrame - lastAnim >= 100){
            if(square < WIDTH){
                tempGrid[row][square] = cell;
                square++;
                refreshGrid(tempGrid);
            }
            else {
                square = 0;
                row--;
            }
            lastAnim = currentFrame;
            requestAnimationFrame(fillGridAnimation);
        }else if(row < HEIGHT){
            requestAnimationFrame(fillGridAnimation);
        }
    };
    requestAnimationFrame(fillGridAnimation);
};
