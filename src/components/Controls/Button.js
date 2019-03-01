import React from 'react';

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

        }
        else{
            if(!listeners){
                document.addEventListener("mouseup", mouseUp);
                document.addEventListener("mouseout", mouseUp);
                document.addEventListener("touchleave", mouseUp);
                document.addEventListener("touchcancel", mouseUp);
                document.addEventListener("touchend", mouseUp);
            }

            if(mousedownID===-1)  //Prevent multiple loops!
            mousedownID = setInterval(() => console.log("here"), 100);
        }
    };

    return(
        <span className="video-game-button" onTouchStart={(e) => handleButtonPress(e, input)} onMouseDown={(e) => handleButtonPress(e, input)}>
            {children}
        </span>
    )
};

export default Button;