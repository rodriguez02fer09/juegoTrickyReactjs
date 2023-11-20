import '../styles/desktop.scss'
import ItemBoard from '../../item-board/src/ItemBoard'

const Board = ({size, playerTurn, board, handleCellClick}) => {
  const containClass = 'contain-board'
  return (
    <div className={`${containClass}`}>
      {board.map((value, index) => (
        <ItemBoard
          key={index}
          value={value}
          size={size}
          playerTurn={playerTurn}
          board={board}
          handleCellClick={handleCellClick}
        />
      ))}
    </div>
  )
}

export default Board
