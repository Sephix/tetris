import React from 'react';

import LeftInfo from "./LeftInfo";
import RightInfo from "./RightInfo";
import Controls from "./Controls/Controls";
import CenterGrid from "./CenterGrid";

const Layout = () => {

    return (
        <div className="game">
            <div className="game-grid">
                <LeftInfo/>
                <CenterGrid/>
                <RightInfo/>
            </div>
            <Controls/>
        </div>
    )
};

export default Layout;