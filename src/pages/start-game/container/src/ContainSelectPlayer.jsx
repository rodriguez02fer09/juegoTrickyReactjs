// src/pages/start-game/ContainSelectPlayer.jsx
import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {
  selectPlayers,
  selectCurrentPlayer,
  selectPlayer as selectPlayerAction,
} from '../../../../redux/players/slice'

import SelectPlayer from '../../components/selectPlayer'

const ContainSelectPlayer = ({type, label}) => {
  const dispatch = useDispatch()
  const players = useSelector(selectPlayers)
  const current = useSelector(selectCurrentPlayer)

  const handleSelect = value => {
    dispatch(selectPlayerAction(value))
  }

  return (
    <SelectPlayer
      type={type}
      label={label}
      players={players}
      current={current}
      onHandleChange={handleSelect}
    />
  )
}

export default ContainSelectPlayer
