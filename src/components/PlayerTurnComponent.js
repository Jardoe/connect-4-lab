import React, {Component} from 'react';

class PlayerTurnComponent extends Component {

  render(){
    return (
      <div className="player-turn">
        <h2>{`${this.props.activePlayer} player's turn`}</h2>
      </div>
    )
  }
}

export default PlayerTurnComponent;
