// src/pages/start-game/ContainPickPlayers.jsx
import React from 'react'
import '../style/desktop.scss'
import ContainerPlayers from '../../container-players/src/ContainerPlayers' // relativa al mismo folder

const ContainPickPlayers = ({players}) => {
  const base = 'containPickPlayers'
  const current = players.find(p => p.selected)

  return (
    <div className={base}>
      <p className={`${base}__select`}>PICK PLAYER 1'S MARK</p>
      <ContainerPlayers players={players} />
      <p className={`${base}__start`}>
        REMEMBER: {current.value.toUpperCase()} GOES FIRST
      </p>
    </div>
  )
}

export default ContainPickPlayers
