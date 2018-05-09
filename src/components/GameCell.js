import React, {Component} from 'react';


class GameCell extends Component {

  render() {
    return (
      <div className={this.props.RowId}>
        <p>{this.props.state}</p>
      </div>
    );
  }
}

export default GameCell;
