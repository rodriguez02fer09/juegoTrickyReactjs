import '../style/desktop.scss'
import ContainerPlayers from '../../container-players'

const ContainPickPlayers = ({players}) => {
  const defaultClass = `containPickPlayers`

  const selectedPlayer = players.find(player => player.selected)

  return (
    <div className={defaultClass}>
      <p className={`${defaultClass}__select`}>PICK PLAYER 1'S MARK</p>
      <ContainerPlayers players={players} />
      <p className={`${defaultClass}__start`}>
        REMEMBER : {selectedPlayer.value.toUpperCase()} GOES FIRST
      </p>
    </div>
  )
}
export default ContainPickPlayers
