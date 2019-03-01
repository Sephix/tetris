import React from 'react';

const Grid = ({grid, id, className}) => {

    return(
        <div className={className}>
            {grid.map((r,i) => <p key={`${id}r${i}`}>{ r.map( (c, ci) => <b className={c} key={`${id}${i}${ci}`}/>)}</p> )}
        </div>
    )
};

export default Grid;