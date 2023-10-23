import '../styles/desktop.scss'
import ItemBoard from '../../item-board/src/ItemBoard'

const Board = ({value, size}) => {
  const containClass = 'contain-board'
  return (
    <div className={`${containClass}`}>
      <ItemBoard value={value} size={size} />
      <ItemBoard value={value} size={size} />
      <ItemBoard value={value} size={size} />
      <ItemBoard value={value} size={size} />
      <ItemBoard value={value} size={size} />
      <ItemBoard value={value} size={size} />
      <ItemBoard value={value} size={size} />
      <ItemBoard value={value} size={size} />
      <ItemBoard value={value} size={size} />
    </div>
  )
}

export default Board
