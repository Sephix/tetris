import React from 'react';
import Grid from "../assets/Grid";
import { connect } from "react-redux";

class RightInfo extends React.Component{

    render() {
        const { nextCell, gameLevel, gameScore } = this.props;
        return(
            <div className="right-info">
                <Grid grid={nextCell} id="R"/>
                <p>Level: {gameLevel}</p>
                <p>Score: {gameScore}<br/></p>
            </div>
        )
    }
}
const mapStateToProps = ({ nextCell, gameLevel, gameScore }) =>{
    return {
        nextCell,
        gameLevel,
        gameScore
    }
};
export default connect(mapStateToProps)(RightInfo);