function HandleCollision(grid, cell, y, x) {

    let testing = false;
    console.log("Entering handle");

    if(y > 0){
        if(y > 17){
            return true;
        }
        for(let i = 0; i<4; i++){
            for(let j = 0; j<4; j++){
                if(cell[i][j] === "black" && grid[y+2][x+j] === "black"){
                    testing = true;
                }
            }
        }}

    return testing;
}

export default HandleCollision;