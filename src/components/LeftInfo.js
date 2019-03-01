import React from 'react';
import {blank} from "../game/cellCollection";
import Grid from "../assets/Grid";

const LeftInfo = () => {
    return(
        <div className="left-info">
            <Grid grid={blank} id="G"/>
        </div>
    )
};

export default LeftInfo;