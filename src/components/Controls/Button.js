import React from 'react';

//Gobal states
let mousedownID = -1;
let listeners = false;
let inputType = null;

const Button = ({children, type, input, action, id}) => {

    const mouseUp = (event) => {
        if(mousedownID!==-1) {  //Only stop if exists
            clearInterval(mousedownID);
            mousedownID=-1;
        }
    };

    const handleButtonPress = (e, input) =>{
        if(inputType === null ) inputType = e.type;
        if(type === "single"){
            if (e.type === inputType) action(input);
        }
        else if(type === "repeat"){
            if(!listeners){
                document.addEventListener("mouseup", mouseUp);
                document.addEventListener("mouseout", mouseUp);
                document.addEventListener("touchleave", mouseUp);
                document.addEventListener("touchcancel", mouseUp);
                document.addEventListener("touchend", mouseUp);
            }
            if (e.type === inputType) action(input);
            if(mousedownID===-1)  //Prevent multiple loops!
                mousedownID = setInterval(() => action(input), 100);
        }
    };

    return(
        <span id={id} className="video-game-button" onTouchStart={(e) => handleButtonPress(e, input)} onMouseDown={(e) => handleButtonPress(e, input)}>
            {children}
        </span>
    )
};

export default Button;