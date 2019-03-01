import React, { useState } from 'react';
import {GAME_BLANK} from "../game/settings";
import Grid from "../assets/Grid";
import {connect} from "react-redux";

class CenterGrid extends React.Component{

    render() {
        console.log(this.props);
        return (
            <div className="centeredgame">
                <Grid grid={GAME_BLANK} id="C"/>
                <button onClick={() => console.log(this.props)}>clic</button>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
   return {
        grid: state.game.loop()
   }
};
export default connect(mapStateToProps)(CenterGrid);