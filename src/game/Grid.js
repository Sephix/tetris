import {HEIGHT, WIDTH, BACKGROUND_COLOR} from "./settings";

class Grid {
    livingCell = false;

    constructor(){
        this.grid = this.generateGrid();
        this.deadGrid = this.generateGrid();
    }

    renderCelltoGrid(Cell){
        if(this.livingCell){
            let { cell, cellHeight, cellWidth, rowPos, colPos, isAlive } = Cell;
            if (isAlive){
                let nbRow = (cellHeight-1 > rowPos) ? rowPos+1 : cellHeight;
                let tempGrid = this.generateGrid([]);
                for (let i = 0; i < nbRow; i++){
                    for (let j = colPos; j < colPos + cellWidth; j++){
                        tempGrid[rowPos-i][j] = cell[cellHeight-1 - i][j - colPos];
                    }
                }
                this.grid = tempGrid;
            }
            else {
                this.deadGrid = this.grid;
            }
        }
    }


    addCell(){
        if(!this.livingCell){
            this.livingCell = true;
        }
    }

    generateGrid(grid){
        let tempGrid = [];
        if(grid) tempGrid = [...grid];
        for (let i = tempGrid.length; i < HEIGHT; i++){
            let row = [];
            for (let j = 0; j < WIDTH; j++){
                row = [ ...row, BACKGROUND_COLOR];
            }
            tempGrid = [ ...tempGrid, row];
        }
        return tempGrid;
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