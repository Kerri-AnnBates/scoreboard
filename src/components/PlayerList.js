import React from "react";
import { Consumer } from "./Context";
import Player from "./Player";

const PlayerList = (props) => {
    return (
        <Consumer>
            {context => {
                return (
                    <React.Fragment>
                        {context.players.map((player, index) =>
                            <Player
                                {...player}
                                index={index}
                                key={player.id.toString()}
                                removePlayer={props.removePlayer}
                                isHighestScore={props.highestScore === player.score}
                            />
                        )}
                    </React.Fragment>
                );
            }}
        </Consumer>
    )
}

export default PlayerList;