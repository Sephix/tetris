

function GenerateNewCell(){

    let C0 = [["black", "black", "white", "white"],
        ["black", "black", "white", "white"],
        ["white", "white", "white", "white"],
        ["white", "white", "white", "white"]];

    let C1 = [["black", "white", "white", "white"],
        ["black", "white", "white", "white"],
        ["black", "white", "white", "white"],
        ["black", "white", "white", "white"]];

    let C2 = [["white", "black", "black", "white"],
        ["black", "black", "white", "white"],
        ["white", "white", "white", "white"],
        ["white", "white", "white", "white"]];

    let C3 = [["black", "black", "white", "white"],
        ["white", "black", "black", "white"],
        ["white", "white", "white", "white"],
        ["white", "white", "white", "white"]];

    let C4 = [["white", "black", "white", "white"],
        ["black", "black", "black", "white"],
        ["white", "white", "white", "white"],
        ["white", "white", "white", "white"]];

    let C5 = [["black", "white", "white", "white"],
        ["black", "black", "black", "white"],
        ["white", "white", "white", "white"],
        ["white", "white", "white", "white"]];

    let C6 = [["white", "white", "black", "white"],
        ["black", "black", "black", "white"],
        ["white", "white", "white", "white"],
        ["white", "white", "white", "white"]];
    return eval("C" + Math.round(Math.random() * 6));
}

export default GenerateNewCell;