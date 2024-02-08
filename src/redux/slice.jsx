import {createSlice} from '@reduxjs/toolkit'

export const selectedSlice = createSlice({
  name: 'players',
  initialState: [
    {value: 'x', selected: true},
    {value: 'o', selected: false},
  ],
  reducers: {
    selecPlayer: (state, action) => {
      const newValue = action.payload
      state.forEach(player => {
        if (player.value === newValue) {
          player.selected = true
        } else {
          player.selected = false
        }
      })
    },
    //getPlayerSelect: (state, action) => {},
  },
})

export const {statePlayers, selecPlayer, getPlayerSelect} =
  selectedSlice.actions
export default selectedSlice.reducer
