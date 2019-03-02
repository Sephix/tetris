import React from 'react';
import { connect } from "react-redux";

class RightInfo extends React.Component{

    render() {
        const { gameState, gameLevel, gameScore } = this.props;
        return(
            <div className="right-info">
                <div>
                    {gameState === '' ? 'Appuyer sur Start' : gameState}
                </div>
                <div>
                    Level: {gameLevel}
                </div>
                <div>
                    Score: {gameScore}
                </div>
            </div>
        )
    }
}
const mapStateToProps = ({ gameState, gameLevel, gameScore }) =>{
    return {
        gameState,
        gameLevel,
        gameScore
    }
};
export default connect(mapStateToProps)(RightInfo);