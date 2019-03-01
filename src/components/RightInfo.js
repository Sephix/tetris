import React from 'react';
import Grid from "../assets/Grid";
import { connect } from "react-redux";
import { start } from "../loop";

class RightInfo extends React.Component{

    render() {
        const { nextCell } = this.props;
        return(
            <div className="right-info">
                <Grid grid={nextCell} id="R"/>
                <button onClick={() => start()}>START GAME</button>
            </div>
        )
    }
}
const mapStateToProps = ({nextCell}) =>{
    return {
        nextCell
    }
};
export default connect(mapStateToProps)(RightInfo);