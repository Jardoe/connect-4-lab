import React, {Component} from 'react';

class ChoiceButton extends Component {
  constructor(props) {
    super(props)
    this.onChoiceButtonClicked = this.onChoiceButtonClicked.bind(this)
  }

  onChoiceButtonClicked(event) {
    this.props.handleClick(event.target.className)
  }

  render() {

    return (
        <button type="button" className={this.props.columnNumber} onClick={this.onChoiceButtonClicked}>{this.props.columnNumber +1 }</button>
    )
  }
}

export default ChoiceButton;
