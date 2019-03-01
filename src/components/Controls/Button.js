import React from 'react';
import { connect } from "react-redux";
import { gameInput } from "../../actions";

//Gobal states
let mousedownID = -1;
let listeners = false;

const Button = ({children, type, input, gameInput}) => {

    const mouseUp = (event) => {
        if(mousedownID!==-1) {  //Only stop if exists
            clearInterval(mousedownID);
            mousedownID=-1;
        }
    };

    const handleButtonPress = (e, input) =>{
        if(type === "single"){
            gameInput(input);
        }
        else{
            if(!listeners){
                document.addEventListener("mouseup", mouseUp);
                document.addEventListener("mouseout", mouseUp);
                document.addEventListener("touchleave", mouseUp);
                document.addEventListener("touchcancel", mouseUp);
                document.addEventListener("touchend", mouseUp);
            }
            gameInput(input);
            if(mousedownID===-1)  //Prevent multiple loops!
            mousedownID = setInterval(() =>gameInput(input), 100);
        }
    };

    return(
        <span className="video-game-button" onTouchStart={(e) => handleButtonPress(e, input)} onMouseDown={(e) => handleButtonPress(e, input)}>
            {children}
        </span>
    )
};

export default connect( null, { gameInput })(Button);