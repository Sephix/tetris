import React,{useState} from 'react';
import { Game } from "../game/Main";

const App = () => {
    const [grid, setGrid] = useState([ ...Game()]);

    const handleOnClick = move =>{
        let tempGrid = Game(move);
        setGrid(tempGrid);
    };

    return (
        <div className="board">
            {grid.map((r,i) => <p key={`r${i}`}>{ r.map( (c, ci) => <b className={c} key={`${i}${ci}`}/>)}</p> )}
            <button onClick={() => handleOnClick('DOWN')}>DOWN</button>
            <button onClick={() => handleOnClick('LEFT')}>LEFT</button>
            <button onClick={() => handleOnClick('RIGHT')}>RIGHT</button>
            <button onClick={() => handleOnClick('ROTATE')}>ROTATE</button>
        </div>
    )
};

export default App;