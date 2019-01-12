function HandleLineDestruction(grid) {
    let newGrid = grid;
    let tempGrid = grid;
    let dLine = [];
    let count = 0;

    for(let i = 19; i > 0; i--){
        for(let j = 0; j < 10; j++){
            if(newGrid[i][j] !== "white"){
                count++;
            }
            if(count === 10){
                for(let l = i; l > 0; l--){
                    for(let k = 0; k < 10; k++){
                        if(l === 0){
                            newGrid[l][k] = "white";
                        }else {
                            newGrid[l][k] = newGrid[l - 1][k];
                        }
                    }
                }
            }
        }
        count = 0;
    }

    return newGrid
}
export default HandleLineDestruction;