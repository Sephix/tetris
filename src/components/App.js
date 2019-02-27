import React,{useState, useEffect} from 'react';
import { Game, start } from "../game/Main";

import { Button } from 'semantic-ui-react';
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
                <div className="game-grid">
                    <div className="left-info">
                        {savedCell.map((r,i) => <p>{ r.map( (c, ci) => <b className={c}/>)}</p> )}
                    </div>
                    <div className="centeredgame">
                        {grid.map((r,i) => <p key={`r${i}`}>{ r.map( (c, ci) => <b className={c} key={`${i}${ci}`}/>)}</p> )}
                    </div>
                    <div className="right-info">
                        <div className="next-cell">
                            {nextCell.map(r =><p>{ r.map(sq => <b className={sq}/>)}</p>)}<br/>
                        </div>
                        Level : {level}<br/>
                        Score : {score}<br/>
                        {lost ? "PERDU" : "En Cours..."}<br/>
                        <Button color="teal" onClick={() => start()}>START GAME</Button>
                    </div>
                </div>
                <div className="controls">
                    <div className="ui centered grid">
                        <div className="two column column centered row">
                            <div className="column center aligned"><Button circular inverted color="orange" icon="save outline" size="massive" onClick={() => handleOnClick('a')} /></div>
                            <div className="column center aligned"><Button circular inverted color="purple" icon="redo" size="massive" onClick={() => handleOnClick('ROTATE')} /></div>
                        </div>
                        <div className="two column column centered row">
                            <div className="column center aligned"><Button circular inverted color="teal" icon="angle left" size="massive" onClick={() => handleOnClick('LEFT')} /></div>
                            <div className="column center aligned"><Button circular inverted color="teal" icon="angle right" size="massive" onClick={() => handleOnClick('RIGHT')} /></div>
                        </div>
                        <Button circular inverted color="red" icon="angle down" size="massive" onMouseDown={() => handleOnClick('DOWN')} />
                    </div>
                </div>
            </div>
        </>
    )
};

export default App;