import '../styles/desktop.scss'
import ComponentLetters from '../../../../../common/components/component-letters/src/ComponentLetters'

const ItemBoard = ({
  value,
  playerTurn,
  handleCellClick,
  posicionIndex,
  selected,
}) => {
  const defaultClass = 'item-board'
  debugger
  return (
    <div
      className="item-board"
      onClick={() => selected !== true && handleCellClick(posicionIndex)}
    >
      <ComponentLetters playerTurn={playerTurn} value={value} />
    </div>
  )
}
export default ItemBoard
