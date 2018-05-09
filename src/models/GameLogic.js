export const setupBoard = function () {
    const gameBoard= []

  const cell = function(i,j) {
    return {
      RowId: i,
      ColumnId: j,
      state: 'empty'
    }
  }

  for (let i = 0; i < 6; i ++) {
    gameBoard.push([cell(i,0),cell(i,1), cell(i,2), cell(i,3), cell(i,4), cell(i,5), cell(i,6)]);
  }
  return gameBoard;
}

export const tokenDrop = function(columnChoice, playerColour, gameBoard) {
  for (let i=5; i>=0; i--) {
    if(gameBoard[i][columnChoice].state === 'empty') {
      gameBoard[i][columnChoice].state = playerColour;
      return gameBoard;
    }
  }
}


// const checkGameState = function() {
//   if (checkTLtoBR() || checkTtoB() || checkTRtoBL() || checkLtoR()) {
//     return true;
//   }
//   return false;
// }


// const checkTLtoBR = function(playerSelectedPosition, playerColour) {
//   const rowPostion = playerSelectedPosition.RowId;
//   const columnPosition = playerSelectedPosition.ColumnId;
//   if(cell(rowPostion -1, columnPosition -1).state === playerColour) {
//
//   }
// }
// checkCellBRtoTL = function(x,y) {
//   const numberInARow = 1;
//   if(cell(rowPosition + x, columnPosition + y).state === playerColour) {
//     if (x < 0) {
//       x -= 1;
//     } else {
//       x +=1;
//     }
//     if (y < 0) {
//       y -= 1;
//     } else {
//       y += 1;
//     }
//
//     checkCellNextTo(x,y)
//     numberInARow += 1;
//   }
