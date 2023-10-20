import '../styles/desktop.scss'
import ItemBoard from '../../item-board/src/ItemBoard'

const Board = () => {
  const containClass = 'contain-board'
  return (
    <div className={`${containClass}`}>
      <ItemBoard />
      <ItemBoard />
      <ItemBoard />
      <ItemBoard />
      <ItemBoard />
      <ItemBoard />
      <ItemBoard />
      <ItemBoard />
      <ItemBoard />
    </div>
  )
}

export default Board
