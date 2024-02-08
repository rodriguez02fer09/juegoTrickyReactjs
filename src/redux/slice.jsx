import {createSlice} from '@reduxjs/toolkit'

export const selectedSlice = createSlice({
  name: 'players',
  initialState: [
    {value: 'x', selected: true},
    {value: 'o', selected: false},
  ],
  reducers: {
    statePlayers: (state, action) => {
      return action.payload
    },
    selecPlayer: (state, action) => {
      const currentPlayerIndex = state.findIndex(player => player.selected)
      state[currentPlayerIndex].selected = false
      const newPlayerIndex = state.findIndex(
        player => player.value === action.payload,
      )
      state[newPlayerIndex].selected = true
    },
    getPlayerSelect: (state, action) => {
      return action.payload
      // return statePlayers.filter(p => {
      //   return p.selected
      // })[0].value
    },
  },
})

export const {statePlayers, selecPlayer, getPlayerSelect} =
  selectedSlice.actions
export default selectedSlice.reducer
