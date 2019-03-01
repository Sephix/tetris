import React from 'react'

import "semantic-ui-css/semantic.min.css";
import Button from "./Button"

const Controls = () => {

    return(
        <div className="controls">
            <div className="ui centered grid">
                <div className="two column column centered row">
                    <div className="column center aligned">
                                <Button type="single" input="a">
                                    A-Save
                                </Button>
                    </div>
                    <div className="column center aligned">
                                <Button type="single" input="ROTATE">
                                    Z-Rotate
                                </Button>
                    </div>
                </div>
                <div className="two column column centered row">
                    <div className="column center aligned">
                                <Button input="q">
                                    Q-Left
                                </Button>
                    </div>
                    <div className="column center aligned">
                                <Button input="d">
                                    D-Right
                                </Button>
                    </div>
                </div>
                <div className="center aligned">
                                <Button input="s">
                            S-Down
                        </Button>
                </div>
            </div>
        </div>
    )
};

export default Controls;