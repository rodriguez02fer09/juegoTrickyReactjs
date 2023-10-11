import React from 'react'
import '../style/desktop.scss'
import OptionPlayer from '../../option-player/src/OptionPlayer'

const ContainerPlayers = ({players}) => {
  return (
    <div className="containerPlayers">
      {players.map(player => (
        <OptionPlayer player={player} />
      ))}
    </div>
  )
}

export default ContainerPlayers
