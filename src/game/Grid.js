import {HEIGHT, WIDTH, BACKGROUND_COLOR} from "./settings";

class Grid {
    livingCell = false;

    constructor(){
        this.grid = Grid.generateGrid([]);
        this.deadGrid = Grid.generateGrid([]);
    }

    renderCelltoGrid(Cell){
        if(this.livingCell){
            let { cell, cellHeight, cellWidth, rowPos, colPos, isAlive} = Cell;
            if (isAlive){
                let tempGrid = this.deadGrid.map(r => r.map(c => c));
                let nbRow = (cellHeight-1 > rowPos) ? rowPos+1 : cellHeight;
                for (let i = 0; i < nbRow; i++){
                    for (let j = colPos; j < colPos + cellWidth; j++){
                        if(cell[cellHeight-1 - i][j - colPos] !== BACKGROUND_COLOR){
                            tempGrid[rowPos-i][j] = cell[cellHeight-1 - i][j - colPos];
                        }
                    }
                }
                this.grid = tempGrid;
            }
            else if (!isAlive) {
                this.deadGrid = this.grid.map(r => r.map(c => c));
            }
        }
    }

    addCell(){
        if(!this.livingCell){
            this.livingCell = true;
        }
    }

    static generateGrid(grid){
        let genGrid = [];
        for (let i = grid.length; i < HEIGHT; i++){
            let row = [];
            for (let j = 0; j < WIDTH; j++){
                row = [ ...row, BACKGROUND_COLOR];
            }
            genGrid = [ ...genGrid, row];
        }
        return [...genGrid, ...grid];
    }

    handleRowDestruction(){
        let tempGrid = this.grid.map(row => row.map(square => square));
        const lineToDestruct = tempGrid.reduce((tab, row, index) => {
            const compute = row.filter((cell, index, row) => row && cell !== "white");
            if (compute.length === WIDTH) tab = [...tab, index];
            return tab;
        }, []);
        lineToDestruct.reverse();
        lineToDestruct.forEach(line => tempGrid.splice(line,1));
        if (tempGrid !== this.grid) this.grid = tempGrid;
        this.grid = Grid.generateGrid(this.grid).map(row => row.map(square => square));
        this.deadGrid = this.grid;
    }
}

export default Grid;