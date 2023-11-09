import React from 'react'
import {useState} from 'react'

const TrickyContext = React.createContext()

const TrickyProvider = ({children}) => {
  const [statePlayers, setStatePlayers] = React.useState([
    {value: 'x', selected: true},
    {value: 'o', selected: false},
  ])

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
    return statePlayers.filter(p => {
      return p.selected
    })[0].value
  }

  return (
    <TrickyContext.Provider
      value={{
        statePlayers,
        selecPlayer,
        getPlayerSelect,
      }}
    >
      {children}
    </TrickyContext.Provider>
  )
}

export {TrickyContext, TrickyProvider}
