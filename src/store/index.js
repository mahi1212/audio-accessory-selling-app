import { configureStore, combineReducers } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import themerReducer from './themeSlice'
// 1. Create Reducer
const rootReducer = combineReducers({
    counter : counterReducer,
    // theme : themerReducer,
})

// 2. Create Store
const store = configureStore({
    reducer : rootReducer
})

export default store;