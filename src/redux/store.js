import { configureStore } from '@reduxjs/toolkit'
import catCardReducer from '../redux/features/catCardSlice'
import { api } from '../redux/features/catCardSlice'
export const store = configureStore({
  reducer: {
    catCard: catCardReducer,
  },
})