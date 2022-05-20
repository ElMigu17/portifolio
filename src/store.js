import { configureStore } from '@reduxjs/toolkit'
import languageReducer from './Language/LanguageSlice.js'

export default configureStore({
  reducer: {
    language: languageReducer,
  },
})