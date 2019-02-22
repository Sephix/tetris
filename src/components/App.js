import React,{useState} from 'react';

import Grid from '../game/Grid';
import Cell from "../game/Cell";

const App = () => {
    const gameGrid = new Grid();
    const [grid] = useState(gameGrid.grid);
    const cell = new Cell();
    gameGrid.addingCell(cell);
    gameGrid.incrementCellRow();
    gameGrid.incrementCellRow();
    gameGrid.incrementCellRow();
    gameGrid.incrementCellRow();
    gameGrid.incrementCellRow();
    cell.rotate();
    gameGrid.renderCelltoGrid();

    return (
        <div className="board">
        {grid.map((r,i) => <p key={`r${i}`}>{ r.map( (c, ci) => <b className={c} key={`${i}${ci}`}/>)}
        </p> )}
        </div>
    )
};

export default App;