import {HEIGHT, WIDTH, BACKGROUND_COLOR} from "./settings";

class Grid {

    grid = [];
    livingCell = false;
    cell = null;

    constructor(){
        this.generateGrid();
    }

    incrementCellRow(){
        this.cell.rowPos++;
    }

    renderCelltoGrid(){
        if(this.livingCell){
            let { cell, cellHeight, cellWidth, rowPos, colPos } = this.cell;
            let nbRow = (cellHeight-1 > rowPos) ? rowPos+1 : cellHeight;
            for (let i = 0; i < nbRow; i++){
                for (let j = colPos; j < colPos + cellWidth; j++){
                    this.grid[rowPos-i][j] = cell[cellHeight-1 - i][j - colPos];
                }
            }
            console.log(this.grid);
        }
    }

    addingCell(cell){
        if(!this.livingCell){
            this.cell = cell;
            this.livingCell = true;
        }}

    generateGrid(){
        for (let i = this.grid.length; i < HEIGHT; i++){
            let row = [];
            for (let j = 0; j < WIDTH; j++){
                row = [ ...row, BACKGROUND_COLOR];
            }
            this.grid = [ ...this.grid, row];
        }
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
        this.generateGrid();
    }
}

export default Grid;