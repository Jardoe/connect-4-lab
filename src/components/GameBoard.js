import React, {Component} from 'react';
import GameCell from './GameCell.js';
import './GameBoard.css';

class GameBoard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
      const gameBoard = this.props.boardState;
      const gameView = gameBoard.map((gameRow, index) =>{
        return (
            gameRow.map((gameCell, index) => {
              return (
                <GameCell RowId= {gameCell.RowId} ColumnId = {gameCell.ColumnId} state = {gameCell.state}/>
              );
            })
          )
        })

    return (
      <div className="game-board">
        {gameView}
      </div>
    );
  }
}

export default GameBoard;
