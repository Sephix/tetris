import React, {Component} from "react";
import GenerateNewCell from "./generateNewCell";
import HandleCollision from "./handleColistion";
import HandleRotation from "./handleRotation";
import HandleLineDestruction from "./handleLineDestruction"

class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            grid: [
                ["white", "white", "white", "white", "white", "white", "white", "white", "white", "white"],
                ["white", "white", "white", "white", "white", "white", "white", "white", "white", "white"],
                ["white", "white", "white", "white", "white", "white", "white", "white", "white", "white"],
                ["white", "white", "white", "white", "white", "white", "white", "white", "white", "white"],
                ["white", "white", "white", "white", "white", "white", "white", "white", "white", "white"],
                ["white", "white", "white", "white", "white", "white", "white", "white", "white", "white"],
                ["white", "white", "white", "white", "white", "white", "white", "white", "white", "white"],
                ["white", "white", "white", "white", "white", "white", "white", "white", "white", "white"],
                ["white", "white", "white", "white", "white", "white", "white", "white", "white", "white"],
                ["white", "white", "white", "white", "white", "white", "white", "white", "white", "white"],
                ["white", "white", "white", "white", "white", "white", "white", "white", "white", "white"],
                ["white", "white", "white", "white", "white", "white", "white", "white", "white", "white"],
                ["white", "white", "white", "white", "white", "white", "white", "white", "white", "white"],
                ["white", "white", "white", "white", "white", "white", "white", "white", "white", "white"],
                ["white", "white", "white", "white", "white", "white", "white", "white", "white", "white"],
                ["white", "white", "white", "white", "white", "white", "white", "white", "white", "white"],
                ["white", "white", "white", "white", "white", "white", "white", "white", "white", "white"],
                ["white", "white", "white", "white", "white", "white", "white", "white", "white", "white"],
                ["white", "white", "white", "white", "white", "white", "white", "white", "white", "white"],
                ["white", "white", "white", "white", "white", "white", "white", "white", "white", "white"],
            ],
            x:  Math.round(Math.random() * 6),
            y: 0,
            cell: 0,
            livingCell: false,
            started: false,
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
        let livingCell = this.state.livingCell;
        let started = this.state.started;
        let newCell = this.state.cell;

        if(livingCell) {
            switch (key) {
                case 'z' :
                    if (livingCell) {
                        for (let i = 0; i < 4; i++) {
                            for (let j = 0; j < 4; j++) {
                                if (newCell[i][j] === "black") {
                                    grid[i + newY][newX + j] = "white";
                                }
                            }
                        }
                        newCell = HandleRotation(grid, newCell, newX, newY);
                        this.setState({cell: newCell});
                    }
                    break;
                case 's' :
                    if (livingCell && !HandleCollision(grid, newCell, newY, newY + 1, newX, newX)) {
                        for (let i = 0; i < 4; i++) {
                            for (let j = 0; j < 4; j++) {
                                if (newCell[i][j] === "black" && newY > -1) {
                                    grid[i + newY][j + newX] = "white";
                                }

                            }
                        }
                        newY++;
                        this.setState({y: newY});
                    } else {
                        livingCell = false;
                    }
                    break;
                case 'd' :
                    if (livingCell && !HandleCollision(grid, newCell, newY, newY, newX, newX + 1)) {
                        for (let i = 0; i < 4; i++) {
                            for (let j = 0; j < 4; j++) {
                                if (newCell[i][j] === "black") {
                                    grid[i + newY][newX + j] = "white";
                                }
                            }
                        }
                        newX++;
                        this.setState({x: newX});
                    }
                    break;
                case 'q' :
                    if (livingCell && !HandleCollision(grid, newCell, newY, newY, newX, newX - 1) && newY > -1) {
                        for (let i = 0; i < 4; i++) {
                            for (let j = 0; j < 4; j++) {
                                if (newCell[i][j] === "black") {
                                    grid[i + newY][newX + j] = "white";
                                }
                            }
                        }
                        newX--;
                        this.setState({x: newX});
                    }
                    break;
                case ' ' :
                    if (!started) {
                        started = true;
                    }
                    break;
            }
        }

        if(!livingCell){
            newY = 0;
            livingCell = true;
            newX = Math.round(Math.random() * 6);
            newCell = GenerateNewCell();
        }

        grid = HandleLineDestruction(grid);

        if (newY > -1 && newX >= 0 && livingCell) {
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
        this.setState({x: newX});
        this.setState({y: newY});
        this.setState({livingCell: livingCell});
        this.setState({cell: newCell});
    }
}

export default Grid;