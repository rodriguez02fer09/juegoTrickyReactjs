// src/redux/players/slice.jsx
import {createSlice} from '@reduxjs/toolkit'

export const playersSlice = createSlice({
  name: 'players',
  initialState:
    localStorage.getItem('players') !== null
      ? JSON.parse(localStorage.getItem('players'))
      : [
          {value: 'x', selected: true},
          {value: 'o', selected: false},
        ],
  reducers: {
    selectPlayer(state, action) {
      const newValue = action.payload
      state.forEach(p => {
        p.selected = p.value === newValue
      })
    },
  },
})

// exportamos la action
export const {selectPlayer} = playersSlice.actions

// selector para obtener TODO el arreglo de players
export const selectPlayers = state => state.players

// **AÑADE** este selector para el jugador activo:
export const selectCurrentPlayer = state => state.players.find(p => p.selected)

// el reducer por defecto
export default playersSlice.reducer
