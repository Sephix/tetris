import React from 'react';
import {blank} from "../game/cellCollection";
import Grid from "../assets/Grid";
import { connect } from "react-redux";
import { startGame } from "../actions";

const RightInfo = ({ startGame }) => {
    return(
        <div className="right-info">
            <Grid grid={blank} id="R"/>
            <button onClick={startGame}>START GAME</button>
        </div>
    )
};

export default connect(null, { startGame })(RightInfo);