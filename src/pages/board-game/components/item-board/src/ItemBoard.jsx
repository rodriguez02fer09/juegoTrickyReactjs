import '../styles/desktop.scss'
import ComponentLetters from '../../../../../common/components/component-letters/src/ComponentLetters'

const ItemBoard = ({value, size}) => {
  const defaultClass = 'item-board'

  return (
    <div className="item-board">
      <ComponentLetters value={value} size={size} />
    </div>
  )
}
export default ItemBoard
