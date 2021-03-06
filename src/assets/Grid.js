import React  from 'react';

import './grid.css';

const Grid = ({grid, id, className}) => {
    return(
        <div className={className}>
            {grid.map((r,i) => <p className="grid" key={`${id}r${i}`}>{ r.map( (c, ci) => <b className={c} key={`${id}${i}${ci}`}/>)}</p> )}
        </div>
    )
};

export default Grid;