import React, {Component} from "react";
import GenerateNewCell from "./generateNewCell";
import HandleCollision from "./handleColistion";
import HandleMove from "./handleMove";

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

    handleKeyPress = (event) => {
        let key = event.key;
        let grid = [...this.state.grid];
        let newY = this.state.y;
        let newX = this.state.x;
        let lastY = newY - 1;

        if (this.state.cell === 0) {
            this.setState({cell: GenerateNewCell.newCell()})
        }

        let newCell = this.state.cell;
        console.log(newCell);

        switch (key) {
            case 's' :
                if (lastY >= 0 && this.state.x >= 0) {
                    for (let i = 0; i < 4; i++) {
                        for (let j = 0; j < 4; j++) {
                            if (newCell[i][j] === "black" && lastY >= 0) {
                                grid[lastY + i][this.state.x + j] = "white"
                            }
                        }
                    }
                }
                newY++;
                this.setState({y: newY});
                break;

            case 'd' :
                for (let i = 0; i < 4; i++) {
                    for (let j = 0; j < 4; j++) {
                        if (newCell[i][j] === "black") {
                            grid[i + newY][newX + j] = "white";
                        }
                    }
                }
                newX++;
                this.setState({x: newX});
                break;

            case 'q' :
                for (let i = 0; i < 4; i++) {
                    for (let j = 0; j < 4; j++) {
                        if (newCell[i][j] === "black") {
                            grid[i + newY][newX + j] = "white";
                        }
                    }
                }
                newX--;
                this.setState({x: newX});
                break;
        }

        if(HandleCollision(grid, newCell, newY, newX)){
            this.setState({cell: GenerateNewCell.newCell()})
            this.setState({y: -1});
        }
            if (newY >= 0 && newX >= 0) {
                //Updating cell pos
                for (let i = 0; i < 4; i++) {
                    for (let j = 0; j < 4; j++) {
                        if (newCell[i][j] === "black") {
                            grid[newY + i][newX + j] = "black";
                            this.setState({grid});
                        }
                    }
                }
            }
    }
}

export default Grid;