import {BACKGROUND_COLOR, WIDTH, HEIGHT} from "./settings";

import * as Cells from "./cellCollection";

class Cell{
    static previousCell = null;

    cell = null;
    isAlive = true;
    state;

    cellHeight = 0;
    cellWidth = 0;
    rowPos = -1;

    constructor (){
        this.randomCellSelection();
        this.findCellSize();
        this.colPos = Math.floor(Math.random() * (WIDTH - this.cellWidth));
    }

    moveLeft(){
        if (this.colPos !== 0 && this.isAlive){
            this.colPos--;
        }
    }

    moveRight(){
        if (WIDTH - this.cellWidth > this.colPos && this.isAlive){
            this.colPos++;
        }
    }

    moveDown(){
        if(HEIGHT - this.cellHeight >= this.rowPos){
            this.rowPos += 1;
        }
        else this.isAlive = false;
    }
    findCellSize (){
        //Cell Height
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (this.cell[i][j] !== BACKGROUND_COLOR) {
                    this.cellHeight = i+1;
                }
            }
        }
        //Cell Width
        for (let k = 0; k < 4; k++) {
            for (let l = 0; l < 4; l++) {
                if (this.cell[l][k] !== BACKGROUND_COLOR) {
                    this.cellWidth = k+1;
                }
            }
        }
    }

    randomCellSelection (){
        let random = null;
        do {
            random = Math.floor(Math.random() * Math.floor(7));
        } while (random === Cell.previousCell);
        Cell.previousCell = random;
        switch (random) {
            case 0:
                this.cell = Cells.one;
                break;
            case 1:
                this.cell = Cells.two;
                break;
            case 2:
                this.cell = Cells.three;
                break;
            case 3:
                this.cell = Cells.four;
                break;
            case 4:
                this.cell = Cells.five;
                break;
            case 5:
                this.cell = Cells.six;
                break;
            case 6:
                this.cell = Cells.seven;
                break;
            default:
        }
    }
}

export default Cell;