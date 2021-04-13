import React from "react";
import PropTypes from "prop-types";
import { Consumer } from "./Context";

const Counter = ({ index, score }) => {
    return (
        <Consumer>
            {context => (
                <div className="counter">
                    <button className="counter-action decrement" onClick={() => context.actions.changeScore(-1, index)}> - </button>
                    <span className="counter-score">{score}</span>
                    <button className="counter-action increment" onClick={() => context.actions.changeScore(1, index)}> + </button>
                </div>
            )}
        </Consumer>
    );
}

Counter.propTypes = {
    index: PropTypes.number,
    score: PropTypes.number,
}

export default Counter;