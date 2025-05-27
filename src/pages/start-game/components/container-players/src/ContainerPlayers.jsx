import '../style/desktop.scss'
import OptionPlayer from '../../option-player/src/OptionPlayer'

const ContainerPlayers = ({players}) => {
  return (
    <div className="containerPlayers">
      {players.map(p => (
        <OptionPlayer key={p.value} player={p} />
      ))}
    </div>
  )
}
export default ContainerPlayers
