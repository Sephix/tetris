import React from 'react';
import Grid from "../assets/Grid";
import {connect} from "react-redux";

class LeftInfo extends React.Component{

    render() {
        const { savedCell } = this.props;
        return(
            <div className="left-info">
                <Grid grid={savedCell} id="G"/>
            </div>
        )
    }
}

const mapStateToProps = ({savedCell}) =>{
    return {
        savedCell
    }
};
export default connect(mapStateToProps)(LeftInfo);