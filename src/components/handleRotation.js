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
    let thisX = x;
    let thisY = y;

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

    if(HandleCollision(grid, newCell, y, y, x, x)){
        return cell;
    }else{
        return newCell;
    }

}

export default HandleRotation;