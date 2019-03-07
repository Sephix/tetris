import {game} from "./actions";

const buttonId = {
    a: "BA",
    z: "BZ",
    q: "BQ",
    s: "BS",
    d: "BD"
};

const keyList = ['a', 'z', 'q', 's', 'd'];

//Sets event listeners
export const events = () => {
    document.onkeypress =  handleKeyPress;
    document.onkeyup = handleKeyUp;
};

let keyPressedId = -1;
let lastKeyPressed = null;
function handleKeyPress(e){
    let key = e.key.toLowerCase();
    if(key === 'a' || key === 'z' || key === 'q' || key === 's' || key === 'd' ) {
        if (e.key !== lastKeyPressed) {
            handleKeyUp();
        }
        if (keyPressedId === -1) {
            let btn = document.getElementById(buttonId[e.key.toLowerCase()]);
            btn.className += " active";
            lastKeyPressed = key;
            if(key !== 'a' && key !== 'z' ){
                game(key);
                keyPressedId = setInterval(() => game(key), 90);
            }else {
                lastKeyPressed = key;
                game(key);
                keyPressedId = 0;
            }
        }
    }
}
function handleKeyUp(e) {
    if(e)
        if(keyList.some(key => key === e.key.toLowerCase())){
            let btn = document.getElementById(buttonId[e.key.toLowerCase()]);
            btn.classList.remove("active");
        }
    if(keyPressedId!==-1) {  //Only stop if exists
        clearTimeout(keyPressedId);
        keyPressedId=-1;
    }
}
