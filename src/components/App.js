import React,{useState} from 'react';

import Grid from '../game/Grid';

const App = () => {
    const gameGrid = new Grid();
    const [grid, setGrid] = useState(gameGrid.grid);
    gameGrid.generateNewCell();
    gameGrid.incrementCellRow();
    gameGrid.renderCelltoGrid();

    return (
        <div>
        {grid.map(r => <p>{ r.map( c => <b> {c} </b> ) }</p> )}
        </div>
    )
};

export default App;