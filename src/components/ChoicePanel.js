import React from 'react';
import ChoiceButton from './ChoiceButton.js'
import './ChoicePanel.css'

const ChoicePanel = () => {
  const choiceButtons = new Array(7);

  for(let i=0; i<7; i++) {
    choiceButtons.push(
      <ChoiceButton columnNumber={i} />
    );
  }

  // choiceButtonClicked() {
  //
  // }

  return (
    <div className="choice-buttons">
      {choiceButtons}
    </div>
  )
};

export default ChoicePanel;
