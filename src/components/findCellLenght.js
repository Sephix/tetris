/**
 * @return {number}
 */
function FindCellLenght(cell) {

    let height = 0;

    for (let k = 0; k < 4; k++) {
        for (let l = 0; l < 4; l++) {
            if (cell[l][k] === "black") {
                height = k;
            }
        }
    }
    return height;
}

export default FindCellLenght;