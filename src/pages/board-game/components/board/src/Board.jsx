import '../styles/desktop.scss'
import ItemBoard from '../../item-board/src/ItemBoard'

const Board = ({board, handleCellClick, playerTurn}) => {
  const containClass = 'contain-board'
  return (
    <div className={`${containClass}`}>
      {board.map((move, index) => (
        <ItemBoard
          key={index}
          value={move.value}
          posicionIndex={move.index}
          posicion={move.posicion}
          selected={move.selected}
          winner={move.winner}
          handleCellClick={handleCellClick}
          playerTurn={playerTurn}
        />
      ))}
    </div>
  )
}

export default Board
