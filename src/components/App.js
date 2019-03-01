import React,{useState, useEffect} from 'react';
import { Game, start } from "../game/Main";

import "semantic-ui-css/semantic.min.css";

let mousedownID = -1;  //Global ID of mouse down interval
let keyPressedId = -1;
let lastKeyPressed = null;

const App = (props) => {
    //<editor-fold desc="Hooks declaration">
    const [grid, setGrid] = useState([ ...Game().grid]);
    const [lost, setLost] = useState(Game().lost);
    const [score, setScore] = useState(Game().score);
    const [level, setLevel] = useState(Game().level);
    const [nextCell, setNextCell] = useState(Game().cell);
    const [savedCell, setSavedCell] = useState(Game().savedCell.cell);
    //</editor-fold>

    const game = move => Game(move);

    //<editor-fold desc="handlers functions">
    //Mouse down events
    const handleOnMouseDown = (e,move) => {
        game(move);
        if(mousedownID===-1)  //Prevent multiple loops!
        mousedownID = setInterval(() => whileMouseDown(move), 100);
    };
    function mouseup(event) {
        if(mousedownID!==-1) {  //Only stop if exists
            clearInterval(mousedownID);
            mousedownID=-1;
        }
    }
    function whileMouseDown(move) {
        game(move);
    }
    //</editor-fold>

    //<editor-fold desc="KeyPress handlers">
    function handleKeyPress(e){
        if(e.key === 'a' || e.key === 'z' || e.key === 'q' || e.key === 's' || e.key === 'd' ) {
            if (e.key !== lastKeyPressed) {
                handleKeyUp();
            }
            if (keyPressedId === -1) {
                lastKeyPressed = e.key;
                if(e.key !== 'a' && e.key !== 'z' ){
                    game(e.key);
                    keyPressedId = setInterval(() => game(e.key), 100);
                }else {
                    lastKeyPressed = e.key;
                    game(e.key);
                    keyPressedId = 0;
                }
            }
        }
    }

    function handleKeyUp() {
        if(keyPressedId!==-1) {  //Only stop if exists
            clearTimeout(keyPressedId);
            keyPressedId=-1;
        }
    }
    //</editor-fold>

    //<editor-fold desc="Event listener">
//event for keypress
    document.onkeypress = handleKeyPress;
    document.onkeyup = handleKeyUp;
//Assign events clearing intervals
    document.addEventListener("mouseup", mouseup);
    document.addEventListener("mouseout", mouseup);
    document.addEventListener("touchleave", mouseup);
    document.addEventListener("touchcancel", mouseup);
    document.addEventListener("touchend", mouseup);
//</editor-fold>

    //<editor-fold desc="Hooks! useEffect">
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
    //</editor-fold>

    return (
        <>
            <div className="game">
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
                                <span className="video-game-button" onTouchStart={(e) => handleOnMouseDown(e,'LEFT')} onMouseDown={(e) => handleOnMouseDown(e,'LEFT')} >
                                    Q-Left
                                </span>
                            </div>
                            <div className="column center aligned">
                                <span className="video-game-button" onTouchStart={(e) => handleOnMouseDown(e,'RIGHT')} onMouseDown={(e) => handleOnMouseDown(e,'RIGHT')}>
                                    D-Right
                                </span>
                            </div>
                        </div>
                        <div className="center aligned">
                                <span className="video-game-button" onTouchStart={(e) => handleOnMouseDown(e,'DOWN')} onMouseDown={(e) => handleOnMouseDown(e,'DOWN')}>
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