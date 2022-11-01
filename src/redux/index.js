import redux, {createStore, combineReducers} from "redux"

// import { configureStore } from '@reduxjs/toolkit'

import addTaskReducer from './tasks'
// console.log(store.getState())
// {value: 0}

const rootReducers = combineReducers({
    tasks : addTaskReducer
})
// const store = configureStore({ reducer: counterReducer })

const store = createStore(rootReducers)
store.subscribe(() => console.log(store.getState()))
export default store
