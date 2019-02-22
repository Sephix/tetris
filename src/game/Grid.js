import {HEIGHT, WIDTH, BACKGROUND_COLOR} from "./settings";
import Cell from './Cell'

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
        // if(this.livingCell){
        //     let { cell, cellHeight, cellWidth, rowPos, colPos } = this.cell;
        //     for (let i = rowPos; i > rowPos - cellHeight; i--){
        //         for (let j = colPos; j < colPos + cellWidth; j++){
        //             this.grid[i][j] = cell[cellHeight - i - 1][cellWidth];
        //         }
        //     }
        // }
    }

    generateNewCell(){
        if(!this.livingCell){
            this.cell = new Cell();
            this.livingCell = true;
            //this.cell.colPos = Math.floor(Math.random() * (WIDTH - this.cell.cellWidth));
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