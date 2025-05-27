import {createSlice} from '@reduxjs/toolkit'

export const boardSlice = createSlice({
  name: 'board',
  initialState: [
    {p: '0,0', value: '', index: '0', selected: false, winner: false},
    {p: '0,1', value: '', index: '1', selected: false, winner: false},
    {p: '0,2', value: '', index: '2', selected: false, winner: false},
    {p: '1,0', value: '', index: '3', selected: false, winner: false},
    {p: '1,1', value: '', index: '4', selected: false, winner: false},
    {p: '1,2', value: 'o', index: '5', selected: false, winner: false},
    {p: '2,0', value: '', index: '6', selected: false, winner: false},
    {p: '2,1', value: '', index: '7', selected: false, winner: false},
    {p: '2,2', value: '', index: '8', selected: false, winner: false},
  ],
  reducers: {
    updateBoard: (state, action) => {},
  },
})

export const {updateBoard} = boardSlice.actions

export default boardSlice.reducer
