import {BACKGROUND_COLOR, WIDTH, HEIGHT} from "./settings";

import * as Cells from "./cellCollection";

class Cell{
    static previousCell = null;

    cell = null;
    isAlive = true;

    cellHeight = 0;
    cellWidth = 0;
    rowPos = -1;

    constructor (){
        this.randomCellSelection();
        this.findCellSize();
        this.colPos = Math.floor(Math.random() * (WIDTH - this.cellWidth+1));
    }

    moveLeft(deadGrid){
        if (!this.willCollide(deadGrid, this.rowPos, this.colPos-1)){
            this.prevCol = this.colPos;
            this.colPos--;
        }
    }

    moveRight(deadGrid){
        if (!this.willCollide(deadGrid, this.rowPos, this.colPos+1)){
            this.prevCol = this.colPos;
            this.colPos++;
        }
    }

    moveDown(deadGrid){
        if (this.willCollide(deadGrid, this.rowPos+1, this.colPos)) {
            this.isAlive = false;
        }
        else {
            this.prevRow = this.rowPos;
            this.rowPos += 1;
        }
    }

    rotate(deadGrid){
        let newCell = [
            ["white", "white", "white", "white"],
            ["white", "white", "white", "white"],
            ["white", "white", "white", "white"],
            ["white", "white", "white", "white"]
        ];
        let tempCell = this.cell.map(r => r.map(sq => sq));

        for(let i = this.cellHeight; i > 0; i--){
            for(let j = this.cellWidth; j > 0; j--){
                newCell[this.cellWidth- j][this.cellHeight - i] = tempCell[i-1][this.cellWidth - j];
            }
        }
        let currentCell = this.cell.map(r => r.map(sq => sq));
        this.cell = newCell.map(r => r.map(sq => sq));
        this.findCellSize();
        if(this.willCollide(deadGrid, this.rowPos, this.colPos)) this.cell = currentCell;
    }

    willCollide(deadGrid, row, col){
        if (WIDTH - this.cellWidth < col || col < 0 || row > HEIGHT-1)
            return true;
        let nbRow = (this.cellHeight-1 > row) ? row : this.cellHeight;
        for (let i = 0; i < nbRow; i++){
            for (let j = 0; j < this.cellWidth; j++){
                if(deadGrid[row - i][col + j] !== BACKGROUND_COLOR &&
                    this.cell[this.cellHeight-1 - i][j] !== BACKGROUND_COLOR){
                    return true;
                }
            }
        }

        return false;
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