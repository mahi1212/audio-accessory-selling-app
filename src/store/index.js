import { configureStore, combineReducers } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import productsReducer from './productSlice'

// 1. Create Reducer
const rootReducer = combineReducers({
    counter : counterReducer,
    products: productsReducer
})

// 2. Create Store
const store = configureStore({
    reducer : rootReducer
})

export default store;