import HandleCollision from "./handleColistion";
import FindCellHeight from "./findCellHeight";
import FindCellLenght from "./findCellLenght";

function HandleRotation(grid, cell, x, y) {
    let newCell = [
        ["white", "white", "white", "white"],
        ["white", "white", "white", "white"],
        ["white", "white", "white", "white"],
        ["white", "white", "white", "white"]
    ];
    let tempCell = [
        ["white", "white", "white", "white"],
        ["white", "white", "white", "white"],
        ["white", "white", "white", "white"],
        ["white", "white", "white", "white"]
    ];

    for(let i = 0; i < 4; i++){
        for(let j = 0; j < 4; j++){
                tempCell[i][j] = cell[j][i];
            }
    }
    let cellHeight = (cell !== 0 ) ? FindCellHeight(tempCell) : 0;
    let cellLenght = (cell !== 0 ) ? FindCellLenght(tempCell) : 0;

    for (let k = 0; k < cellHeight+1; k++) {
        for (let l = 0; l < cellLenght+1; l++) {
            newCell[k][l] = tempCell[k][cellLenght - l];
        }
    }

    let newCellHeight = (cell !== 0 ) ? FindCellHeight(newCell) : 0;
    let newCellLenght = (cell !== 0 ) ? FindCellLenght(newCell) : 0;

    if(x < 9 - newCellLenght && y > 19-newCellHeight){
        return cell;
    }
    for(let i = 0; i <= newCellHeight; i++) {
        for(let j = 0; j <= newCellLenght; j++){
            if(newCell[i][j] === "black"){
                if(y+i < 19 && grid[y+i][x + j] === "black"){
                    return cell;
                }
            }
        }
    }
    if(y > (18 - newCellHeight +1) || x > 9 - newCellLenght){
        return cell;
    }
    else{
        return newCell;
    }

}

export default HandleRotation;