import FindCellHeight from "./findCellHeight";

/**
 * @return {boolean}
 */
function HandleCollision(grid, cell, y, x) {

    let testing = false;
    let cellHeight = (cell !== 0) ? FindCellHeight(cell) : 0;

    if(y > 0){
        if(y > (18-cellHeight)){
            return true;
        }
        for(let i = 0; i<4; i++){
            for(let j = 0; j<4; j++){
                if(cell[i][j] === "black" && (cell[i+1][j] !== "black")){
                    if(grid[y+i+1][x+j] === "black"){
                        testing = true;
                    }
                }
            }
        }}

    return testing;
}

export default HandleCollision;