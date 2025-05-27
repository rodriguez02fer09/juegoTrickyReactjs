// src/redux/store.js
import {configureStore} from '@reduxjs/toolkit'
import playersReducer from './players/slice'
import boardReducer from './board/slice'

// Middleware que persiste sólo el slice de players en localStorage
const playersMiddleware =
  ({getState}) =>
  next =>
  action => {
    const result = next(action)
    localStorage.setItem('players', JSON.stringify(getState().players))
    return result
  }

export const store = configureStore({
  reducer: {
    players: playersReducer,
    board: boardReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(playersMiddleware),
})
