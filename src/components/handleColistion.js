import FindCellHeight from "./findCellHeight";
import FindCellLenght from "./findCellLenght";

/**
 * @return {boolean}
 */
function HandleCollision(grid, cell, y, newY, x, newX) {

    let testing = false;
    let cellHeight = (cell !== 0 ) ? FindCellHeight(cell) : 0;
    let cellLenght = (cell !== 0 ) ? FindCellLenght(cell) : 0;

    if(newY === y && y >= 0
        && newX === x){
        for (let i = 0; i < cellHeight + 1; i++) {
            for (let j = 0; j < cellLenght + 1; j++) {
                if(cell[i][j] !== "white" && grid[y + i][x + j] !== "white"){
                    return true;
                }
            }
        }
    }
    //Handling side boundaries 
    if(newX > (9-cellLenght)){
        return true;
    }
    if(newX<0){
        return true;
    }

    //Handling side collisions
    //Left collisions
    if (newX >= 0 && newX < x) {
        for (let i = 0; i < cellHeight+1; i++) {
            for(let j = 0; j < cellLenght+1; j++){
                if (cell[i][0] === "black") {
                    if (grid[y + i][newX] === "black") {
                        console.log("1");
                        testing = true;
                    }
                }
                if(j>0) {
                    if (cell[i][j] === "black" && cell[i][j-1] === "white") {
                        if (grid[y + i][newX+j] === "black") {
                            testing = true;
                        }
                    }
                }
            }
        }
    }
//Right collisions
    if(newX < 10 - cellLenght && newX > x) {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (cell[i][j] === "black" && (cell[i][j + 1] !== "black")) {
                    if (grid[y + i][newX+j] === "black") {
                        testing = true;
                    }
                }
            }
        }
    }

//Handling bottom collision
    if(newY > y) {
        if (y > (18 - cellHeight)) {
            return true;
        }
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (i < 3) {
                    if (cell[i][j] === "black" && (cell[i + 1][j] !== "black")) {
                        if (grid[y + i + 1][x + j] === "black") {
                            testing = true;
                        }
                    }
                } else if (cell[i][j] === "black") {
                    if (grid[y + i + 1][x + j] === "black") {
                        testing = true;
                    }
                }
            }
        }
    }

    return testing;

}

export default HandleCollision;