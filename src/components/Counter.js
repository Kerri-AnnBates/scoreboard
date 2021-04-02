import React from "react";

const Counter = ({ index, score, changeScore }) => {
    return (
        <div className="counter">
            <button className="counter-action decrement" onClick={() => changeScore(-1, index)}> - </button>
            <span className="counter-score">{score}</span>
            <button className="counter-action increment" onClick={() => changeScore(1, index)}> + </button>
        </div>
    );

}

export default Counter;