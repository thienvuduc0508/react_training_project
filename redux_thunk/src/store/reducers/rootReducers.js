import React from 'react'
import { combineReducers } from 'redux';
import todoReducer from './todoReducer'

const rootReducers = combineReducers({
    todoReducer
})

export default rootReducers