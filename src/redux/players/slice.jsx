import {createSlice} from '@reduxjs/toolkit'

export const selectedSlice = createSlice({
  name: 'players',
  initialState:
    localStorage.getItem('players') !== null
      ? JSON.parse(localStorage.getItem('players'))
      : [
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
  },
})

export const {selecPlayer} = selectedSlice.actions
export default selectedSlice.reducer
