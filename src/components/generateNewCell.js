import React, {Component} from "react";

class GenerateNewCell extends Component {

    static newCell = () => [
        ["white", "black", "white", "white"],
        ["black", "black", "white", "white"],
        ["black", "white", "white", "white"],
        ["white", "white", "white", "white"]
    ]
}

export default GenerateNewCell;