import axios from 'axios'

window.BASE = ''
const API_ROOT = `${BASE}/api`

export function fetchData(query) {
	const url = `${API_ROOT}/data${query}`
	return axios.get(url)
}