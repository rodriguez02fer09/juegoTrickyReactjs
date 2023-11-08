import '../styles/desktop.scss'
import ItemBoard from '../../item-board/src/ItemBoard'

const Board = ({value, size, playerTurn}) => {
  const containClass = 'contain-board'
  return (
    <div className={`${containClass}`}>
      <ItemBoard value={'x'} size={size} playerTurn={playerTurn} />
      <ItemBoard value={''} size={size} playerTurn={playerTurn} />
      <ItemBoard value={''} size={size} playerTurn={playerTurn} />
      <ItemBoard value={'o'} size={size} playerTurn={playerTurn} />
      <ItemBoard value={''} size={size} playerTurn={playerTurn} />
      <ItemBoard value={'x'} size={size} playerTurn={playerTurn} />
      <ItemBoard value={'o'} size={size} playerTurn={playerTurn} />
      <ItemBoard value={''} size={size} playerTurn={playerTurn} />
      <ItemBoard value={''} size={size} playerTurn={playerTurn} />
    </div>
  )
}

export default Board
