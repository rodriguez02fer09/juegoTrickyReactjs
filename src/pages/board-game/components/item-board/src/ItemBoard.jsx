import '../styles/desktop.scss'
import ComponentLetters from '../../../../../common/components/component-letters/src/ComponentLetters'

const ItemBoard = ({
  value,
  playerTurn,
  handleCellClick,
  posicionIndex,
  selected,
  winner,
}) => {
  const defaultClass = 'item-board'

  return (
    <div
      className="item-board"
      onClick={() => selected !== true && handleCellClick(posicionIndex)}
    >
      <ComponentLetters value={value} winner={winner} />
    </div>
  )
}
export default ItemBoard
