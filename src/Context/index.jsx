import React from 'react'
import {useState} from 'react'

const TrickyContext = React.createContext()

const TrickyProvider = ({children}) => {
  const players = [
    {value: 'x', selected: false},
    {value: 'o', selected: true},
  ]
  const [value, setValue] = React.useState(players)

  const selecPlayer = i => {
    const updatedValue = [...value]
    updatedValue[i].selected = !updatedValue[i].selected
    setValue(updatedValue)
  }

  return (
    <TrickyContext.Provider
      value={{
        players,
      }}
    >
      {children}
    </TrickyContext.Provider>
  )
}

export {TrickyContext, TrickyProvider}
