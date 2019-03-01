import React from 'react';
import LeftInfo from "./LeftInfo";
import RightInfo from "./RightInfo";
import Controls from "./Controls/Controls";
import CenterGrid from "./CenterGrid";
import game from "../loop/index";

let keyPressedId = -1;
let lastKeyPressed = null;

const Layout = () => {
    function handleKeyPress(e){
        if(e.key === 'a' || e.key === 'z' || e.key === 'q' || e.key === 's' || e.key === 'd' ) {
            if (e.key !== lastKeyPressed) {
                handleKeyUp();
            }
            if (keyPressedId === -1) {
                lastKeyPressed = e.key;
                if(e.key !== 'a' && e.key !== 'z' ){
                    game(e.key);
                    keyPressedId = setInterval(() => game(e.key), 90);
                }else {
                    lastKeyPressed = e.key;
                    game(e.key);
                    keyPressedId = 0;
                }
            }
        }
    }
    function handleKeyUp() {
        if(keyPressedId!==-1) {  //Only stop if exists
            clearTimeout(keyPressedId);
            keyPressedId=-1;
        }
    }
    //event for keypress
    document.onkeypress = handleKeyPress;
    document.onkeyup = handleKeyUp;

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