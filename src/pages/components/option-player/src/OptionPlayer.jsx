import '../style/desktop.scss'
import PlayersSelect from '../../players-select/src/PlayersSelect'

const OptionPlayer = ({player}) => (
  <div className="option-player">
    <PlayersSelect player={player} />
  </div>
)
export default OptionPlayer
