import React, {Component} from 'react';
import PlayerTurnComponent from '../components/PlayerTurnComponent.js';
import {setupBoard} from '../models/GameLogic.js';
import ChoicePanel from '../components/ChoicePanel.js'
import GameBoard from '../components/GameBoard.js';
import {tokenDrop} from '../models/GameLogic.js'


class GameContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      activePlayer: "Yellow",
      boardState: setupBoard(),
      columnSelected: null
    }

    this.columnButtonClick = this.columnButtonClick.bind(this);
  }

  columnButtonClick(columnNumber){
    const newGameState = tokenDrop(columnNumber, this.state.activePlayer, this.state.boardState);
    this.setState({boardState: newGameState});
    this.switchPlayer();
  }

  switchPlayer(){
    if(this.state.activePlayer === "Yellow"){
      this.setState({activePlayer: "Red"})
    } else {
      this.setState({activePlayer: "Yellow"})
    }
  }

  render(){
    return (
      <div>
        <PlayerTurnComponent activePlayer={this.state.activePlayer}/>
        <ChoicePanel handleSelection={this.columnButtonClick} />
        <GameBoard boardState={this.state.boardState} activePlayer={this.state.activePlayer} />
      </div>
    )
  }
}

export default GameContainer;
