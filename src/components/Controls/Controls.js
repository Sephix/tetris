import React from 'react'

import './controls.css';

import Button from "./Button"

import { game } from "../../loop/actions";
import { paused, reset, start} from "../../loop/index";


const Controls = () => {

    return(
        <div className="controls-box">
            <div className="controls">
                <div className="row">
                    <span className="start-btn" onClick={() => start()}>START</span>
                    <span className="start-btn" onClick={() => paused()}>PAUSE</span>
                    <span className="start-btn" onClick={() => reset()}>RESET</span>
                </div>
                <div className="row">
                    <div className="game-btn">
                        <Button id="BA" type="single" input="a" action={game}>
                            A
                        </Button>
                        SAVE
                    </div>
                    <div className="game-btn">
                        <Button id="BZ" type="single" input="ROTATE" action={game}>
                            Z
                        </Button>
                        ROTATE
                    </div>
                </div>
                <div className="row">
                    <div className="game-btn">
                        <Button id="BQ" type="repeat" input="q" action={game}>
                            Q
                        </Button>
                        LEFT
                    </div>
                    <div className="game-btn">
                        <Button id="BD" type="repeat" input="d" action={game}>
                            D
                        </Button>
                        RIGHT
                    </div>
                </div>
                <div className="row">
                    <div className="game-btn">
                        <Button id="BS" type="repeat" input="s" action={game}>
                            S
                        </Button>
                        DOWN
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Controls;