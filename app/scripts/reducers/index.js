import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import AppReducer from './app'
import DataReducer from './data'

const RootReducer = combineReducers({
	routing: routerReducer,
	app: AppReducer,
	data: DataReducer
})

export default RootReducer