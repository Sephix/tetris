import React from 'react'

import "semantic-ui-css/semantic.min.css";
import Button from "./Button"

import game, {paused, reset, start} from "../../loop/index";


const Controls = () => {

    return(
        <div className="controls">
            <div className="ui three column centered grid">
                <div className="three column centered row">
                    <div className="column center aligned">
                        <span className="start-btn" onClick={() => start()}>START</span>
                    </div>
                    <div className="column center aligned">
                        <span className="start-btn" onClick={() => paused()}>PAUSE</span>
                    </div>
                    <div className="column center aligned">
                        <span className="start-btn" onClick={() => reset()}>RESET</span>
                    </div>
                </div>
                <div className="three column centered row">
                    <div className="column center aligned">
                        <Button type="single" input="a" action={game}>
                            A
                        </Button>
                        SAVE
                    </div>
                    <div className="column center aligned">
                        <Button type="single" input="ROTATE" action={game}>
                            Z
                        </Button>
                        ROTATE
                    </div>
                </div>
                <div className="three column column centered row">
                    <div className="column left aligned">
                        <Button type="repeat" input="q" action={game}>
                            Q
                        </Button>
                        LEFT
                    </div>
                    <div className="column right aligned">
                        <Button type="repeat" input="d" action={game}>
                            D
                        </Button>
                        RIGHT
                    </div>
                </div>
                <div className="center aligned">
                    <Button type="repeat" input="s" action={game}>
                        S
                    </Button>
                    DOWN
                </div>
            </div>
        </div>
    )
};

export default Controls;