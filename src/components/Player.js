import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Counter from "./Counter";

class Player extends PureComponent {
    static propTypes = {
        changeScore: PropTypes.func,
        removePlayer: PropTypes.func,
        name: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired,
        index: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
    }

    render() {
        const { name, id, removePlayer, score, index, changeScore } = this.props;

        return (
            <div className="player">
                <span className="player-name">
                    <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
                    {name}
                </span>

                <Counter
                    score={score}
                    changeScore={changeScore}
                    index={index}
                />
            </div>
        );
    }
}

export default Player;