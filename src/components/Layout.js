import React from 'react';
import Grid from "./Grid";
import {blank} from "../game/cellCollection";
import {GAME_BLANK} from "../game/settings";
import Controls from "./Controls/Controls";

const Layout = () => {

    return (
        <div className="game">
            <div className="game-grid">
                <Grid className="left-info" grid={blank} id="G"/>
                <Grid className="centeredgame" grid={GAME_BLANK} id="G"/>
                <Grid className="left-info" grid={blank} id="G"/>
            </div>
            <Controls/>
        </div>
    )
};

export default Layout;