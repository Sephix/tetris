import {HEIGHT, WIDTH, BACKGROUND_COLOR} from "./settings";

class Grid {
    livingCell = false;
    intScore = 0;
    score = 0;
    previousScore = 0;
    level = 1;
    constructor(){
        this.grid = Grid.generateGrid([]);
        this.deadGrid = Grid.generateGrid([]);
        this.lost = false;
    }

    setScore(n){
        this.score += n * this.level;
        this.intScore += n;
        if (this.intScore > this.previousScore + 50){
            this.level++;
            this.previousScore += 50 + (this.intScore - (this.previousScore+50));
        }
    }

    setLost(){
        this.lost = true;
    }

    wipeActiveGrid(){
        this.grid = this.deadGrid.map(r => r.map(c => c));
    }

    renderCelltoGrid(Cell){
        if(this.livingCell && !this.lost){
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
        if(!this.livingCell && !this.lost){
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

    shouldGridDestruct(){
        let tempGrid = this.grid.map(row => row.map(square => square));
        const lineToDestruct = tempGrid.reduce((tab, row, index) => {
            const compute = row.filter((cell, index, row) => row && cell !== "white");
            if (compute.length === WIDTH) tab = [...tab, index];
            return tab;
        }, []);
        return lineToDestruct.length > 0;
    }

    getTempGrid(){
        let tempGrid = this.grid.map(row => row.map(square => square));
        let row = [];
        for (let j = 0; j < WIDTH; j++){
            row = [ ...row, BACKGROUND_COLOR];
        }
        const lineToDestruct = tempGrid.reduce((tab, row, index) => {
            const compute = row.filter((cell, index, row) => row && cell !== "white");
            if (compute.length === WIDTH) tab = [...tab, index];
            return tab;
        }, []);
        lineToDestruct.reverse();
        lineToDestruct.forEach(line => tempGrid[line] = row);
        return tempGrid;
    }

    handleRowDestruction(){
        let tempGrid = this.grid.map(row => row.map(square => square));
        const lineToDestruct = tempGrid.reduce((tab, row, index) => {
            const compute = row.filter((cell, index, row) => row && cell !== "white");
            if (compute.length === WIDTH) tab = [...tab, index];
            return tab;
        }, []);
        lineToDestruct.reverse();
        this.setScore(lineToDestruct.length * lineToDestruct.length);
        lineToDestruct.forEach(line => tempGrid.splice(line,1));
        if (tempGrid !== this.grid) this.grid = tempGrid;
        this.grid = Grid.generateGrid(this.grid).map(row => row.map(square => square));
        this.deadGrid = this.grid;
    }
}

export default Grid;