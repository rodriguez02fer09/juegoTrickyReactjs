import '../style/desktop.scss'
import ContainerPlayers from '../../container-players'
import {useSelector} from 'react-redux'
import {statePlayers} from '../../../../../redux/slice'

const ContainPickPlayers = ({players}) => {
  const defaultClass = `containPickPlayers`
  const statePlayers = useSelector(state => {
    state.players
  })
  return (
    <div className={defaultClass}>
      <p className={`${defaultClass}__select`}>PICK PLAYER 1'S MARK</p>
      <ContainerPlayers players={players} />
      <p className={`${defaultClass}__start`}>REMEMBER : GOES FIRST</p>
    </div>
  )
}
export default ContainPickPlayers
