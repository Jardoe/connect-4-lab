import React from 'react';

  const ChoiceButton = ({columnNumber}) => {

    return (
        <button type="button" className={columnNumber}>{columnNumber +1 }</button>
    )
  }

export default ChoiceButton;
