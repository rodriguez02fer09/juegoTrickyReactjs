import React, {useEffect} from 'react'
import {useState} from 'react'
import useLocalStorage from './useLocalStorage'
import _default from '@storybook/addon-onboarding'

const TrickyContext = React.createContext()

const TrickyProvider = ({children}) => {
  const [statePlayers, setStatePlayers] = React.useState([
    {value: 'x', selected: true},
    {value: 'o', selected: false},
  ])

  const {upDatePlayers, setUpDatePlayers} = useLocalStorage(statePlayers)

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
    setUpDatePlayers(updatedState)
  }

  const getPlayerSelect = () => {
    return statePlayers
      .filter(p => {
        return p.selected
      })[0]
      .value.toUpperCase()
  }
  useEffect(() => {
    if (upDatePlayers) {
      setStatePlayers(upDatePlayers)
    }
  }, [])

  return (
    <TrickyContext.Provider
      value={{
        statePlayers,
        selecPlayer,
        getPlayerSelect,
        setUpDatePlayers,
      }}
    >
      {children}
    </TrickyContext.Provider>
  )
}

export {TrickyContext, TrickyProvider}
