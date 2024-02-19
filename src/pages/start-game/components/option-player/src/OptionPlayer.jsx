import '../style/desktop.scss'
import PlayersSelect from '../../players-select/src/PlayersSelect'
import {useDispatch} from 'react-redux'
import {selecPlayer} from '../../../../../redux/players/slice'

const OptionPlayer = ({player}) => {
  const dispatch = useDispatch()

  const {value, selected} = player || {} //asignación con valor predeterminado
  const defaultPlayer = `option-player`
  const selectedValue = selected ? 'active' : ''

  const onClick = () => {
    dispatch(selecPlayer(value))
  }

  return (
    <div
      className={`${defaultPlayer} ${defaultPlayer}__${value} ${defaultPlayer}--${selectedValue}`}
      onClick={onClick}
    >
      <PlayersSelect player={player} />
    </div>
  )
}

export default OptionPlayer
