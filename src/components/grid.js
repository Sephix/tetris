import React, {Component} from "react";
import GenerateNewCell from "./generateNewCell";

class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            grid: [
                ["white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white"],
                ["white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white"],
                ["white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white"],
                ["white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white"],
                ["white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white"],
                ["white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white"],
                ["white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white"],
                ["white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white"],
                ["white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white"],
                ["white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white"],
                ["white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white"],
                ["white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white"],
                ["white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white"],
                ["white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white"],
                ["white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white"],
                ["white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white"],
                ["white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white"],
                ["white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white"],
                ["white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white"],
                ["white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white"],
            ],
            x: 0,
            y: -1,
            cell: 0,
        }
    }

    render() {
        const board = this.state.grid;
        return (
            <div onKeyPress={this.handleKeyPress}
                 className="board"
                 tabIndex="0">
                {board.map((board, index) =>
                    <p>
                        {
                            board.map((board, index) =>
                                <b className={board}></b>
                            )
                        }
                    </p>
                )}
            </div>
        );
    }

    handleKeyPress = () => {
        let grid = [...this.state.grid];
        let newY = this.state.y;
        let lastY = newY - 1;

        if (this.state.cell === 0) {
            this.setState({cell: GenerateNewCell.newCell()})
        }
        if (newY >= 0 && this.state.x >= 0) {
            //Updating cell pos
            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < 4; j++) {
                    if (this.state.cell[i][j] === "black") {
                        grid[newY + i][this.state.x + j] = "black";
                        this.setState({grid});
                    }
                }
            }
            //Removing last cell
            if (lastY >= 0 && this.state.x >= 0) {
                for (let i = 0; i < 4; i++) {
                    for (let j = 0; j < 4; j++) {
                        if (this.state.cell[i][j] === "black") {
                            grid[lastY][this.state.x + j] = "white";
                            this.setState({grid});
                        }
                    }
                }
            }
        }
        newY++;
        this.setState({y: newY});
    }
}

export default Grid;