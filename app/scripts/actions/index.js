import axios from 'axios'

const API_KEY = 'b1f6f24bc92335a9025c415fe9743dda'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'fetch_weather'

export function fetchWeather(term) {
	const url = `${ROOT_URL}&q=${term},us`
	const request = axios.get(url)

	return {
		type: FETCH_WEATHER,
		payload: request
	}
}