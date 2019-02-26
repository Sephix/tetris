import React,{useState, useEffect} from 'react';
import { Game, start } from "../game/Main";

const App = () => {
    const [grid, setGrid] = useState([ ...Game().grid]);
    const [lost, setLost] = useState(Game().lost);
    const [score, setScore] = useState(Game().score);
    const [level, setLevel] = useState(Game().level);
    const [nextCell, setNextCell] = useState(Game().cell);
    const [savedCell, setSavedCell] = useState(Game().savedCell.cell);
    const game = move => Game(move);

    //Next Cell
    useEffect(() =>{
        setSavedCell(Game().savedCell.cell);
    }, [Game().savedCell.cell]);

    //Next Cell
    useEffect(() =>{
        setNextCell(Game().cell);
    }, [Game().cell]);

    //Level
    useEffect(() =>{
        setLevel(game().level);
    }, [game().level]);

    //Grid
    useEffect(() =>{
        setGrid(game().grid);
    }, [game().grid]);

    //Lost
    useEffect(() =>{
        setLost(game().lost);
    }, [game().lost]);

    //Score
    useEffect(() =>{
        setScore(game().score);
    }, [game().score]);

    const handleOnClick = move =>{
        game(move);
    };

    const handleKeyPress = e =>{
        game(e.key);
    };

    return (
        <div className="board" onKeyDown={handleKeyPress}>
            {console.log(Game())}
            {grid.map((r,i) => <p key={`r${i}`}>{ r.map( (c, ci) => <b className={c} key={`${i}${ci}`}/>)}</p> )}
            <button onClick={() => handleOnClick('DOWN')}>DOWN</button>
            <button onClick={() => handleOnClick('LEFT')}>LEFT</button>
            <button onClick={() => handleOnClick('RIGHT')}>RIGHT</button>
            <button onClick={() => handleOnClick('ROTATE')}>ROTATE</button>
            <button onClick={() => start()}>START</button>
            <p>Level : {level}</p>
            <p>Score : {score}</p>
            <p>{lost ? "PERDU" : "En Cours..."}</p>
            <p>
                {nextCell.map((r,i) => <p key={`r${i}`}>{ r.map( (c, ci) => <b className={c}/>)}</p> )}
            </p>
            <p>
                {savedCell.map((r,i) => <p key={`r${i}`}>{ r.map( (c, ci) => <b className={c}/>)}</p> )}
            </p>
        </div>
    )
};

export default App;