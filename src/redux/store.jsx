import {configureStore} from '@reduxjs/toolkit'
import selectedReducer from './slice'

const reHydrateStore = () => {
  if (localStorage.getItem('players') !== null) {
    return JSON.parse(localStorage.getItem('players')) // re-hydrate the store
  }
}

const playersMiddleware = ({getState}) => {
  return next => action => {
    const result = next(action)
    localStorage.setItem('players', JSON.stringify(getState().players))
    return result
  }
}

export const store = configureStore({
  reducer: {
    players: selectedReducer,
  },
  preloadedState: reHydrateStore(),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(playersMiddleware),
})
