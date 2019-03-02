import React from 'react';
import Grid from "../assets/Grid";
import { connect } from "react-redux";
import { start, paused, reset } from "../loop";

class RightInfo extends React.Component{

    render() {
        const { nextCell, gameState } = this.props;
        return(
            <div className="right-info">
                <Grid grid={nextCell} id="R"/>
                {gameState === '' ? 'Appuyer sur Start' : gameState}
                <span className="start-btn" onClick={() => start()}>START</span>
                <span className="start-btn" onClick={() => paused()}>PAUSE</span>
                <span className="start-btn" onClick={() => reset()}>RESET</span>
            </div>
        )
    }
}
const mapStateToProps = ({nextCell, gameState}) =>{
    return {
        nextCell,
        gameState
    }
};
export default connect(mapStateToProps)(RightInfo);