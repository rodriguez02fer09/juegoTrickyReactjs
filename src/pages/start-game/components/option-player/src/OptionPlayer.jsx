import '../style/desktop.scss'
import PlayersSelect from '../../players-select/src/PlayersSelect'
import {useDispatch} from 'react-redux'
import {selectPlayer} from '../../../../../redux/players/slice'

const OptionPlayer = ({player}) => {
  const dispatch = useDispatch()

  const {value, selected} = player || {}
  const defaultPlayer = `option-player`
  const selectedValue = selected ? 'active' : ''

  const onClick = () => {
    console.log('Dispatching selectPlayer for:', value)
    dispatch(selectPlayer(value))
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
