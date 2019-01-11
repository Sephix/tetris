function HandleLineDestruction(grid) {
    var newGrid = grid;
    var count = 0;

    for(let i = 19; i > 0; i--){
        for(let j = 0; j < 10; j++){
            if(newGrid[i][j] !== "white"){
                count++;
            }
        }
        if(count === 10){
            for(let l = 0; l < 10; l++) {
                newGrid[i][l] = "white";
            }
        }
        count = 0;
    }

    return newGrid
}
export default HandleLineDestruction;