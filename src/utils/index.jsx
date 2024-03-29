// -Problema encontrar un jugador
// -el jugador escoge  X ó O e inicia el juego
// -como pintar el tablero
// -el jugador hace una jugada

// BOARD*/

// var board = [
//   (move1 = {p: '0,0', v: 'X', index: '0'}),
//   (move2 = {p: '0,1', v: '', index: '1'}),
//   (move3 = {p: '0,2', v: '', index: '2'}),
//   (move4 = {p: '1,0', v: 'X', index: '3'}),
//   (move5 = {p: '1,1', v: '', index: '4'}),
//   (move6 = {p: '1,2', v: '', index: '5'}),
//   (move7 = {p: '2,0', v: 'X', index: '6'}),
//   (move8 = {p: '2,1', v: '', index: '7'}),
//   (move9 = {p: '2,2', v: '', index: '8'}),
// ]

// CALCULOS DE COLUMNAS
//esta funcion me trae el valor de cada una de las posiciones

const winnerPosition = (board, positions) => {
  for (let index = 0; index < positions.length; index++) {
    board[positions[index].positions].winner = true
  }
  return board
}

const getByColumn = (colummn, board) => {
  const valor = []

  for (let i = colummn; i <= 6 + colummn; i += 3) {
    valor.push({
      value: board[i].value,
      positions: board[i].index,
    })
  }
  return valor
}

//aqui recibe como parametro las jugadas que hay en el array y
// el valor con el que esta jugando sea X ó O
//Y ESTO ES LO QUE COMPÀRA SI SI ES GANADOR O  NO
//otra forma de hacerlo

const winnerAllColumns = (currentPlayer, board) => {
  let isWinner = false
  for (let i = 0; i <= 2; i++) {
    let columnPlayers = getByColumn(i, board)
    if (winer(columnPlayers, currentPlayer).winner) {
      return {
        winner: winer(columnPlayers, currentPlayer).winner,
        positions: columnPlayers,
      }
    }
  }

  return {
    winner: isWinner,
    positions: [],
  }
}

// winer CALCULA PARA TODAS LAS FUNCIONES
const winer = (plays, currentPlayer) => {
  return {
    winner: plays.every(c => {
      return c.value === currentPlayer
    }),
    positions: plays,
  }
}

// const winnerA = winnerAllColumns('X', board)
// winnerA

//CALCULO DE FILAS

const getByRow = (row, board) => {
  let valor = []
  for (let i = row; i <= 2 + row; i++) {
    valor.push({
      value: board[i].value,
      positions: board[i].index,
    })
  }
  return valor
}

//winer

const wionnerAllRows = (currentPlayer, board) => {
  let isWinnerRow = false
  for (let i = 0; i <= 6; i += 3) {
    let rowPlayers = getByRow(i, board)
    if (winer(rowPlayers, currentPlayer).winner) {
      return {
        winner: winer(rowPlayers, currentPlayer).winner,
        positions: rowPlayers,
      }
    }
  }

  return {
    winner: false,
    positions: [],
  }
}

// const winnerR = wionnerAllRows('X', board)
// winnerR

//DIAGONAL DERECHA

const getRigthDiagonal = board => {
  let valor = []
  for (let i = 2; i <= 6; i += 2) {
    valor.push({
      value: board[i].value,
      positions: board[i].index,
    })
  }
  return valor
}

//winer

const getDiagonalLeft = board => {
  let valor = []
  for (let i = 0; i <= 8; i += 4) {
    valor.push({
      value: board[i].value,
      positions: board[i].index,
    })
  }
  return valor
}

// const winnerDiagonal = getDiagonalLeft(board)
// winnerDiagonal
// w = winer(winnerDiagonal, 'X')

export {
  getByColumn,
  winnerAllColumns,
  winer,
  getByRow,
  wionnerAllRows,
  getRigthDiagonal,
  getDiagonalLeft,
  winnerPosition,
}
