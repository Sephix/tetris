import {HEIGHT, WIDTH, BACKGROUND_COLOR} from "./settings";

class Grid {
    livingCell = false;

    constructor(){
        let grid  = Grid.generateGrid([]);
        this.grid = [...grid];
    }

    renderCelltoGrid(Cell){
        if(this.livingCell){
            let { cell, cellHeight, cellWidth, rowPos, colPos, isAlive, prevRow, prevCol } = Cell;
            if (isAlive){
                let nbRow = (cellHeight-1 > prevRow) ? prevRow+1 : cellHeight;
                let tempGrid = this.grid;
                for (let i = 0; i < nbRow; i++){
                    for (let j = prevCol; j < prevCol + cellWidth; j++){
                        if(tempGrid[prevRow-i][j] === cell[cellHeight-1 - i][j - prevCol]){
                            tempGrid[prevRow-i][j] = BACKGROUND_COLOR;
                        }
                    }
                }
                nbRow = (cellHeight-1 > rowPos) ? rowPos+1 : cellHeight;
                for (let i = 0; i < nbRow; i++){
                    for (let j = colPos; j < colPos + cellWidth; j++){
                        if(tempGrid[rowPos-i][j] === BACKGROUND_COLOR){
                            tempGrid[rowPos-i][j] = cell[cellHeight-1 - i][j - colPos];
                        }
                    }
                }
                this.grid = tempGrid;
            }
            else if (!isAlive) {
                this.deadGrid = [...this.grid];
            }
        }
    }

    addCell(){
        if(!this.livingCell){
            this.livingCell = true;
        }
    }

    static generateGrid(grid){
        let genGrid = [...grid];
        for (let i = genGrid.length; i < HEIGHT; i++){
            let row = [];
            for (let j = 0; j < WIDTH; j++){
                row = [ ...row, BACKGROUND_COLOR];
            }
            genGrid = [ ...genGrid, row];
        }
        return genGrid;
    }

    handleRowDestruction(){
        let tempGrid = this.grid;
        const lineToDestruct = tempGrid.reduce((tab, row, index) => {
            const compute = row.filter((cell, index, row) => row && cell !== "white");
            if (compute.length === WIDTH) tab = [...tab, index];
            return tab;
        }, []);
        lineToDestruct.reverse();
        lineToDestruct.forEach(line => tempGrid.splice(line,1));
        if (tempGrid !== this.grid) this.grid = tempGrid;
        Grid.generateGrid();
    }
}

export default Grid;