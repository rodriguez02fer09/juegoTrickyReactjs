import '../styles/desktop.scss'
import ItemBoard from '../../item-board/src/ItemBoard'

const Board = ({playerTurn, board, handleCellClick}) => {
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
          handleCellClick={handleCellClick}
        />
      ))}
    </div>
  )
}

export default Board
