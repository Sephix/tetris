import React from 'react';
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