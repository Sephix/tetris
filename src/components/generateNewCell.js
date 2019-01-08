import React, {Component} from "react";

class GenerateNewCell extends Component {

    static newCell = () => [
        ["black", "black", "white", "white"],
        ["white", "black", "black", "white"],
        ["white", "white", "white", "white"],
        ["white", "white", "white", "white"]
    ]
}

export default GenerateNewCell;