import React from 'react'

import Button from "./Button"

import game, {paused, reset, start} from "../../loop/index";


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
                        <Button type="single" input="a" action={game}>
                            A
                        </Button>
                        SAVE
                    </div>
                    <div className="game-btn">
                        <Button type="single" input="ROTATE" action={game}>
                            Z
                        </Button>
                        ROTATE
                    </div>
                </div>
                <div className="row">
                    <div className="game-btn">
                        <Button type="repeat" input="q" action={game}>
                            Q
                        </Button>
                        LEFT
                    </div>
                    <div className="game-btn">
                        <Button type="repeat" input="d" action={game}>
                            D
                        </Button>
                        RIGHT
                    </div>
                </div>
                <div className="row">
                    <div className="game-btn">
                        <Button type="repeat" input="s" action={game}>

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