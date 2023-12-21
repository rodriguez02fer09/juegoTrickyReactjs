import React, {useEffect} from 'react'
import {useState} from 'react'
import useLocalStorage from './useLocalStorage'

const TrickyContext = React.createContext()

const TrickyProvider = ({children}) => {
  const {statePlayers, getPlayerSelect, selecPlayer, winner, setWinner} =
    useLocalStorage([
      {value: 'x', selected: true},
      {value: 'o', selected: false},
    ])

  return (
    <TrickyContext.Provider
      value={{
        statePlayers,
        selecPlayer,
        getPlayerSelect,
        winner,
        setWinner,
      }}
    >
      {children}
    </TrickyContext.Provider>
  )
}

export {TrickyContext, TrickyProvider}
