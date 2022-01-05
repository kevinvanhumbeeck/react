import React from 'react';
import Board from './Board'
import Champ from './Champ'

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol><Champ id="0" /></ol>
                </div>
            </div>
        )
    }
}

export default Game