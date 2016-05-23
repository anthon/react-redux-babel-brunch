export default function({ dispatch }) {
	return next => action => {
		if(action.payload && action.payload.then) {
			action.payload
				.then( response => {
					const new_action = { ...action, payload: response }
					dispatch(new_action)
				})
		}
		next(action)
	}
}