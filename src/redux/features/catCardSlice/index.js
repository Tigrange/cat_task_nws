import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { BASE_URL } from 'constants'
import axios from 'axios'

const initialState = {
    loadingCategories:false,
    loadingImages:false,
    categories:[],
    images:[]
}

export const getCatCategories = createAsyncThunk(
    'catCard/getCatCategories',
    async (thunkAPI) => {
    const res = await axios.get(`${BASE_URL}/categories`).then(
            (data) => data.data
    )
    return res
})
export const getCatCards = createAsyncThunk(
    'catCard/getCatCards',
    async (categoryId) => {
        const res = await axios.get(`${BASE_URL}/images/search?limit=10&page=1&category_ids=${categoryId} `)
        .then(
            (data) => data.data
        )
    return res
})

export const catCardSlice = createSlice({
  name: 'catCard',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
  },
  extraReducers:{
    [getCatCategories.pending]: (state) => {
        state.loadingCategories = true
    },
    [getCatCategories.fulfilled]: (state, { payload }) => {
        state.loadingCategories = false
        state.categories = payload
    },
    [getCatCategories.rejected]: (state) => {
    state.loadingCategories = false
    },

    [getCatCards.pending]: (state) => {
        state.loadingImages = true
    },
    [getCatCards.fulfilled]: (state, { payload }) => {
        state.loadingImages = false
        state.images = payload
    },
    [getCatCards.rejected]: (state) => {
    state.loadingImages = false
    },
  }
})

// Action creators are generated for each case reducer function

export default catCardSlice.reducer