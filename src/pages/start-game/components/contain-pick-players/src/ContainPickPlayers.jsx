import '../style/desktop.scss'
import ContainerPlayers from '../../container-players'
import {useContext} from 'react'
import {TrickyContext} from '../../../../../Context'

const ContainPickPlayers = ({players}) => {
  const {getPlayerSelect} = useContext(TrickyContext)
  const defaultClass = `containPickPlayers`

  return (
    <div className={defaultClass}>
      <p className={`${defaultClass}__select`}>PICK PLAYER 1'S MARK</p>
      <ContainerPlayers players={players} />
      <p className={`${defaultClass}__start`}>
        REMEMBER : {getPlayerSelect().toUpperCase()} GOES FIRST
      </p>
    </div>
  )
}
export default ContainPickPlayers
