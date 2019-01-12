

function GenerateNewCell(){

    let rand =  Math.round(Math.random() * 6);

    switch (rand) {
        case 0 :
            return [["black", "black", "white", "white"],
                ["black", "black", "white", "white"],
                ["white", "white", "white", "white"],
                ["white", "white", "white", "white"]];

        case 1 :
            return [["black", "white", "white", "white"],
                ["black", "white", "white", "white"],
                ["black", "white", "white", "white"],
                ["black", "white", "white", "white"]];

        case 2 :
            return [["white", "black", "black", "white"],
                ["black", "black", "white", "white"],
                ["white", "white", "white", "white"],
                ["white", "white", "white", "white"]];

        case 3 :
            return [["black", "black", "white", "white"],
                ["white", "black", "black", "white"],
                ["white", "white", "white", "white"],
                ["white", "white", "white", "white"]];

        case 4 :
            return [["white", "black", "white", "white"],
                ["black", "black", "black", "white"],
                ["white", "white", "white", "white"],
                ["white", "white", "white", "white"]];
        case 5 :
            return [["black", "white", "white", "white"],
                ["black", "black", "black", "white"],
                ["white", "white", "white", "white"],
                ["white", "white", "white", "white"]];

        case 6 :
            return[["white", "white", "black", "white"],
                ["black", "black", "black", "white"],
                ["white", "white", "white", "white"],
                ["white", "white", "white", "white"]];

    }
}

export default GenerateNewCell;