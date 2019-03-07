import { anim, setAnim } from "../index";

import {fillGrid} from "./fillGrid";
import {emptyGrid} from "./emptyGrid";

let sequence = 1;
export const incrementSequence = () => {
    sequence += 1;
};

export const fillInFillOut = (gameGrid) =>{
    if(!anim){
        let lastAnim = 0;
        let tempGrid = gameGrid.map(row => row.map(square => square));
        sequence = 1;
        
        const fillInFillOutAnim = (timestamp) =>{
            if(sequence){
                setAnim(true);
                if (timestamp - lastAnim > 100){
                    if(sequence === 1){
                        fillGrid(tempGrid, incrementSequence);
                        sequence++;
                    }
                    if(sequence === 3){
                        emptyGrid(tempGrid, incrementSequence);
                        sequence++;
                    }
                }
                if (sequence > 5) {
                    setAnim(false);
                    sequence = 0;
                }
                requestAnimationFrame(fillInFillOutAnim);
            }
        };
        requestAnimationFrame(fillInFillOutAnim);
    }
};
