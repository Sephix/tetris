import React from 'react';
import Grid from "../assets/Grid";
import {connect} from "react-redux";
import {paused, reset, start} from "../loop";

class LeftInfo extends React.Component{

    render() {
        const { savedCell, gameState } = this.props;
        return(
            <div className="left-info">
                <Grid grid={savedCell} id="G"/>
                {gameState === '' ? 'Appuyer sur Start' : gameState}
                <span className="start-btn" onClick={() => start()}>START</span>
                <span className="start-btn" onClick={() => paused()}>PAUSE</span>
                <span className="start-btn" onClick={() => reset()}>RESET</span>
            </div>
        )
    }
}

const mapStateToProps = ({savedCell, gameState}) =>{
    return {
        savedCell,
        gameState
    }
};
export default connect(mapStateToProps)(LeftInfo);