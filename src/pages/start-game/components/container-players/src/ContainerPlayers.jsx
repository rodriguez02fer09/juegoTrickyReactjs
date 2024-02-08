import '../style/desktop.scss'
import OptionPlayer from '../../option-player/src/OptionPlayer'

const ContainerPlayers = ({players}) => {
  return (
    <div className="containerPlayers">
      {players.map((player, key) => (
        <OptionPlayer player={player} key={key} />
      ))}
    </div>
  )
}
export default ContainerPlayers
