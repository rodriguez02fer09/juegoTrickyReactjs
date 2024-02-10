import React, {useEffect} from 'react'
import {useState} from 'react'
import useLocalStorage from './useLocalStorage'

const TrickyContext = React.createContext()

const TrickyProvider = ({children}) => {
  const {statePlayers, getPlayerSelect, selecPlayer} = useLocalStorage([
    {value: 'x', selected: false},
    {value: 'o', selected: true},
  ])

  return (
    <TrickyContext.Provider
      value={{
        statePlayers,
        //
        selecPlayer,
        getPlayerSelect,
      }}
    >
      {children}
    </TrickyContext.Provider>
  )
}

export {TrickyContext, TrickyProvider}
