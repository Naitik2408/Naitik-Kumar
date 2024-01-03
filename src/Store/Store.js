import { configureStore } from '@reduxjs/toolkit'
import authReducer from './Auth'
import barDataReducers from './BarData'
import projectCardReducers from './ProjectData'

export const store = configureStore({
  reducer: {
    storeAuth: authReducer,
    langBarData: barDataReducers,
    pData: projectCardReducers
  },
})