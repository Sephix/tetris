import React,{useState, useEffect} from 'react';
import { Game, start } from "../game/Main";

import { Button, Container } from 'semantic-ui-react';
import "semantic-ui-css/semantic.min.css";

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
        <>
            <div className="game" onKeyDown={handleKeyPress}>
                <div className="left-content">
                    {savedCell.map((r,i) => <p>{ r.map( (c, ci) => <b className={c}/>)}</p> )}
                </div>
                <div className="centered">
                    {grid.map((r,i) => <p key={`r${i}`}>{ r.map( (c, ci) => <b className={c} key={`${i}${ci}`}/>)}</p> )}
                </div>
                <div className="right">
                    <div className="next-cell">
                        {nextCell.map(r =><p>{ r.map(sq => <b className={sq}/>)}</p>)}<br/>
                    </div>
                    Level : {level}<br/>
                    Score : {score}<br/>
                    {lost ? "PERDU" : "En Cours..."}<br/>
                    <button onClick={() => start()}>START GAME</button>
                </div>
            </div>
            <div>
                <Button circular icon="angle left" size="massive" onClick={() => handleOnClick('LEFT')} />
                <Button circular icon="angle down" size="massive" onClick={() => handleOnClick('DOWN')} />
                <Button circular icon="angle right" size="massive" onClick={() => handleOnClick('RIGHT')} />
                <Button circular icon="sync alternate" size="massive" onClick={() => handleOnClick('ROTATE')} />
            </div>
        </>
    )
};

export default App;