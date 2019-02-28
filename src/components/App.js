import React,{useState, useEffect} from 'react';
import { Game, start } from "../game/Main";

import "semantic-ui-css/semantic.min.css";

const App = () => {
    const [grid, setGrid] = useState([ ...Game().grid]);
    const [lost, setLost] = useState(Game().lost);
    const [score, setScore] = useState(Game().score);
    const [level, setLevel] = useState(Game().level);
    const [nextCell, setNextCell] = useState(Game().cell);
    const [savedCell, setSavedCell] = useState(Game().savedCell.cell);
    const game = move => Game(move);

    //Mouse down events
    let mousedownID = -1;  //Global ID of mouse down interval

    const handleOnMouseDown = (e,move) => {
        game(move);
        if(mousedownID===-1)  //Prevent multimple loops!
            mousedownID = setInterval(() => whilemousedown(move), 100 /*execute every 100ms*/);
    };

    function mouseup(event) {
        if(mousedownID!==-1) {  //Only stop if exists
            clearInterval(mousedownID);
            mousedownID=-1;
        }

    }
    function whilemousedown(move){
        game(move);
    }

//Assign events
    document.addEventListener("mouseup", mouseup);
//Also clear the interval when user leaves the window with mouse
    document.addEventListener("mouseout", mouseup);
    document.addEventListener("touchleave", mouseup);
    document.addEventListener("touchcancel", mouseup);
    document.addEventListener("touchend", mouseup);

    //Saved Cell
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
                        <button color="teal" onClick={() => start()}>START GAME</button>
                    </div>
                </div>
                <div className="controls">
                    <div className="ui centered grid">
                        <div className="two column column centered row">
                            <div className="column center aligned">
                                <span className="video-game-button" onMouseDown={() => game('a')}>
                                    A-Save
                                </span>
                            </div>
                            <div className="column center aligned">
                                <span className="video-game-button" onMouseDown={() => game('ROTATE')}>
                                    Z-Rotate
                                </span>
                            </div>
                        </div>
                        <div className="two column column centered row">
                            <div className="column center aligned">
                                <span className="video-game-button" onTouchStart={(e) => handleOnMouseDown(e,'LEFT')}>
                                    Q-Left
                                </span>
                            </div>
                            <div className="column center aligned">
                                <span className="video-game-button" onTouchStart={(e) => handleOnMouseDown(e,'RIGHT')}>
                                    D-Right
                                </span>
                            </div>
                        </div>
                        <div className="center aligned">
                                <span className="video-game-button" onTouchStart={(e) => handleOnMouseDown(e,'DOWN')}>
                            S-Down
                        </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default App;