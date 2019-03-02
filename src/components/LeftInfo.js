import React from 'react';
import Grid from "../assets/Grid";
import {connect} from "react-redux";

class LeftInfo extends React.Component{

    render() {
        const { savedCell, nextCell } = this.props;
        return(
            <div className="left-info">
                <div className="next-cell">
                    <Grid grid={nextCell} id="R"/>
                    <p>Next</p>
                </div>
                <div className="save-cell">
                    <p>Saved</p>
                    <Grid grid={savedCell} id="G"/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({savedCell, nextCell}) =>{
    return {
        savedCell,
        nextCell
    }
};
export default connect(mapStateToProps)(LeftInfo);