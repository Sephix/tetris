import React, {Component} from "react";
import GenerateNewCell from "./generateNewCell";
import HandleCollision from "./handleColistion";

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

        switch (key) {
            case 's' :
                if(!HandleCollision(grid, newCell, newY, newY+1, newX, newX)) {
                    for (let i = 0; i < 4; i++) {
                        for (let j = 0; j < 4; j++) {
                            if (newCell[i][j] === "black" && lastY >= 0) {
                                grid[lastY + i][newX + j] = "white"
                            }
                        }
                    }
                    newY++;
                    this.setState({y: newY});
                } else if(newY !==-1){
                        this.setState({cell: GenerateNewCell.newCell()})
                        this.setState({y: -1});
                    }
                break;

            case 'd' :
                if(!HandleCollision(grid, newCell, newY, newY,newX,newX+1)) {
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
                if(!HandleCollision(grid, newCell, newY, newY, newX,newX-1)) {
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