import React, { useState } from 'react';
import {GAME_BLANK} from "../game/settings";
import Grid from "../assets/Grid";
import {connect} from "react-redux";

class CenterGrid extends React.Component{

    render() {
        const { grid } = this.props;
        return (
            <div className="centeredgame">
                <Grid grid={grid} id="C"/>
            </div>
        )
    }
}

const mapStateToProps = ({grid}) =>{
   return {
       grid
   }
};
export default connect(mapStateToProps)(CenterGrid);