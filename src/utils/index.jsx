// src/utils/index.jsx

// Marca las posiciones ganadoras en el tablero
export const winnerPosition = (board, positions) => {
  const newBoard = board.map(cell => ({...cell}))
  // positions ahora es un array de índices
  positions.forEach(idx => {
    newBoard[idx].winner = true
  })
  return newBoard
}

// Obtiene los valores de una columna dada (como objetos con value e index)
export const getByColumn = (columnIndex, board) => {
  const result = []
  for (let i = columnIndex; i < board.length; i += 3) {
    result.push({value: board[i].value, index: board[i].index})
  }
  return result
}

// Comprueba todas las columnas en busca de ganador, devuelve posiciones como índices
export const winnerAllColumns = (currentPlayer, board) => {
  for (let c = 0; c < 3; c++) {
    const column = getByColumn(c, board)
    const check = winer(column, currentPlayer)
    if (check.winner) {
      return {winner: true, positions: column.map(p => p.index)}
    }
  }
  return {winner: false, positions: []}
}

// Comprueba si todos los plays tienen el mismo símbolo y devuelve posiciones como índices
export const winer = (plays, currentPlayer) => ({
  winner: plays.every(c => c.value === currentPlayer),
  positions: plays.map(c => c.index),
})

// Obtiene los valores de una fila dada (como objetos con value e index)
export const getByRow = (rowStartIndex, board) => {
  const result = []
  for (let i = rowStartIndex; i < rowStartIndex + 3; i++) {
    result.push({value: board[i].value, index: board[i].index})
  }
  return result
}

// Comprueba todas las filas en busca de ganador, devuelve posiciones como índices
export const wionnerAllRows = (currentPlayer, board) => {
  for (let r = 0; r < 3; r++) {
    const row = getByRow(r * 3, board)
    const check = winer(row, currentPlayer)
    if (check.winner) {
      return {winner: true, positions: row.map(p => p.index)}
    }
  }
  return {winner: false, positions: []}
}

// Diagonal de izquierda a derecha
// Diagonal de izquierda a derecha (de arriba-izquierda a abajo-derecha)
export const getRigthDiagonal = board =>
  [board[0], board[4], board[8]].map(cell => ({
    value: cell.value,
    index: cell.index,
  }))

// Diagonal de derecha a izquierda
// Diagonal de derecha a izquierda (de arriba-derecha a abajo-izquierda)
export const getDiagonalLeft = board =>
  [board[2], board[4], board[6]].map(cell => ({
    value: cell.value,
    index: cell.index,
  }))

// Función compuesta que revisa filas, columnas y diagonales
// findWinningLine devuelve posiciones como índices numéricos
export function findWinningLine(currentPlayer, board) {
  // 1) Filas
  const rowResult = wionnerAllRows(currentPlayer, board)
  if (rowResult.winner) {
    return rowResult
  }

  // 2) Columnas
  const colResult = winnerAllColumns(currentPlayer, board)
  if (colResult.winner) {
    return colResult
  }

  // 3) Diagonales de izquierda a derecha
  const rightDiag = winer(getRigthDiagonal(board), currentPlayer)
  if (rightDiag.winner) {
    return rightDiag
  }

  // 4) Diagonales de derecha a izquierda
  const leftDiag = winer(getDiagonalLeft(board), currentPlayer)
  if (leftDiag.winner) {
    return leftDiag
  }

  // 5) Si no hay ganador
  return {winner: false, positions: []}
}
