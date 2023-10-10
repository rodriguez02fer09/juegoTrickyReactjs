import '../style/desktop.scss'
import PlayersSelect from '../../players-select/src/PlayersSelect'

const OptionPlayer = ({player}) => {
  const {value, selected} = player
  const defaultPlayer = `option-player`
  const selectedValue = selected ? 'active' : ''
  return (
    <div
      className={`${defaultPlayer} ${defaultPlayer}__${value} ${defaultPlayer}--${selectedValue}`}
    >
      <PlayersSelect player={player} />
    </div>
  )
}

export default OptionPlayer
