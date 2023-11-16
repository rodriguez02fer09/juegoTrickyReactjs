import React, {useState, useEffect} from 'react'

const useLocalStorage = initialPlayers => {
  const storedPlayers =
    JSON.parse(localStorage.getItem('players')) || initialPlayers
  const [statePlayers, setStatePlayers] = useState(storedPlayers)

  const selecPlayer = player => {
    const indexPlayer = statePlayers.findIndex(p => p.value === player)
    const updatedState = statePlayers.map(p => {
      return {
        ...p,
        selected: false,
      }
    })

    updatedState[indexPlayer].selected = true
    setStatePlayers(updatedState)
  }

  const getPlayerSelect = () => {
    return statePlayers
      .filter(p => {
        return p.selected
      })[0]
      .value.toUpperCase()
  }

  useEffect(() => {
    localStorage.setItem('players', JSON.stringify(statePlayers))
  }, [statePlayers])

  return {statePlayers, getPlayerSelect, selecPlayer} //los customhook retornan estados o funciones que cambian
}

export default useLocalStorage
