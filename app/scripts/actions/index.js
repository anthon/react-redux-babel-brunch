import * as api from '../api'

export const REQUEST_PAGE = 'request_page'
export const RECEIVE_PAGE = 'receive_page'
export const fetchData = (query)=> (dispatch,getState) => {
	dispatch(requestData())
	return api.fetchData(query).then( response => {
		dispatch(receiveData(response))
	}, error => {
		console.error(error)
	})
}
const requestData = ()=> ({
	type: REQUEST_PAGE
})
const receiveData = data => ({
	type: RECEIVE_PAGE,
	payload: data
})

export const ADD_APP_CLASS = 'add_app_class'
export const addAppClass = (className)=> {
	if(className.constructor !== Array) className = [className]
	return {
		type: ADD_APP_CLASS,
		payload: className
	}
}

export const REMOVE_APP_CLASS = 'remove_app_class'
export const removeAppClass = (className)=> {
	if(className.constructor !== Array) className = [className]
	return {
		type: REMOVE_APP_CLASS,
		payload: className
	}
}