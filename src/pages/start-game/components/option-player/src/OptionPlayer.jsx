import '../style/desktop.scss'
import PlayersSelect from '../../players-select/src/PlayersSelect'
import {useContext} from 'react'
import {TrickyContext} from '../../../../../Context'

const OptionPlayer = ({player}) => {
  const {selecPlayer} = useContext(TrickyContext)
  const {value, selected} = player || {}
  const defaultPlayer = `option-player`
  const selectedValue = selected ? 'active' : ''

  const onClick = () => {
    selecPlayer(value)
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
