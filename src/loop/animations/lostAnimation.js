import {fillGrid} from "./fillGrid";
import {emptyGrid} from "./emptyGrid";
import {store} from "../../index";
import {refreshGrid} from "../../actions";
import {GAME_BLANK, LOOSE} from "../../game/settings";

let sequence = 1;
export const incrementSequence = () => {
  sequence += 1;
};

export const lostAnimation = (gameGrid) =>{

    let lastAnim = 0;
    let tempGrid = gameGrid.map(row => row.map(square => square));
    sequence = 1;

    let count = 0;
    let lostAnim = 0;
    const blinkLoose = (timestamp) => {
        if (count < 10) {
            if(timestamp - lostAnim > 250){
                if(count % 2 !== 0) store.dispatch(refreshGrid(LOOSE));
                else store.dispatch(refreshGrid(GAME_BLANK));
                lostAnim = timestamp;
                count++;
            }
            requestAnimationFrame(blinkLoose);
        }
    };

    const lostAnimationLoop = (timestamp) =>{
        if(sequence){
            if (timestamp - lastAnim > 100){
                if(sequence === 1){
                    fillGrid(tempGrid);
                    sequence++;
                }
                if(sequence === 3){
                    emptyGrid(tempGrid);
                    sequence++;
                }
                if(sequence === 5){
                    requestAnimationFrame(blinkLoose);
                }
            }
            requestAnimationFrame(lostAnimationLoop);
        }
    };
    requestAnimationFrame(lostAnimationLoop);
};
