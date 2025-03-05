import { createSlice } from '@reduxjs/toolkit'

export const languageSlice = createSlice({
  name: 'language',
  initialState: {
    value: "EN",
  },
  reducers: {
    reset: (state) => {
      state.value = "EN"
    },
    changeLanguage: (state, action) => {
      console.log("aaaaaaaaaaaa", action);
      state.value = action.payload;
    },
  },
})

export const { reset, changeLanguage } = languageSlice.actions

export const selectLanguage = (state) => state.language.value


export default languageSlice.reducer