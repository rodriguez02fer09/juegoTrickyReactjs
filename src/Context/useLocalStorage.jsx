import React, {useState, useEffect} from 'react'

const useLocalStorage = initialPlayers => {
  const storedPlayers =
    JSON.parse(localStorage.getItem('players')) || initialPlayers
  const [upDatePlayers, setUpDatePlayers] = useState(storedPlayers)

  useEffect(() => {
    localStorage.setItem('players', JSON.stringify(upDatePlayers))
  }, [upDatePlayers])

  return {upDatePlayers, setUpDatePlayers}
}

export default useLocalStorage
