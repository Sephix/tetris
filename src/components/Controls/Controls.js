import React from 'react'

import "semantic-ui-css/semantic.min.css";
import Button from "./Button"

import game from "../../loop/index";


const Controls = () => {

    return(
        <div className="controls">
            <div className="ui centered grid">
                <div className="two column column centered row">
                    <div className="column center aligned">
                                <Button type="single" input="a" action={game}>
                                    A-Save
                                </Button>
                    </div>
                    <div className="column center aligned">
                                <Button type="single" input="ROTATE" action={game}>
                                    Z-Rotate
                                </Button>
                    </div>
                </div>
                <div className="two column column centered row">
                    <div className="column center aligned">
                                <Button type="repeat" input="q" action={game}>
                                    Q-Left
                                </Button>
                    </div>
                    <div className="column center aligned">
                                <Button type="repeat" input="d" action={game}>
                                    D-Right
                                </Button>
                    </div>
                </div>
                <div className="center aligned">
                                <Button type="repeat" input="s" action={game}>
                            S-Down
                        </Button>
                </div>
            </div>
        </div>
    )
};

export default Controls;