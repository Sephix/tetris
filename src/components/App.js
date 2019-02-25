import React,{useState, useEffect} from 'react';
import { Game, start } from "../game/Main";

const App = () => {
    const [grid, setGrid] = useState([ ...Game()]);
    const game = move => Game(move);

    useEffect(() =>{
        setGrid(game());
    }, [game()]);

    const handleOnClick = move =>{
        game(move);
    };

    const handleKeyPress = e =>{
        game(e.key);
    };

    return (
        <div className="board" onKeyDown={handleKeyPress}>
            {grid.map((r,i) => <p key={`r${i}`}>{ r.map( (c, ci) => <b className={c} key={`${i}${ci}`}/>)}</p> )}
            <button onClick={() => handleOnClick('DOWN')}>DOWN</button>
            <button onClick={() => handleOnClick('LEFT')}>LEFT</button>
            <button onClick={() => handleOnClick('RIGHT')}>RIGHT</button>
            <button onClick={() => handleOnClick('ROTATE')}>ROTATE</button>
            <button onClick={() => start()}>START</button>
        </div>
    )
};

export default App;