import { apiConstants } from '../constants';
import { authHeader } from '../helpers';

export const topicsService = {
	getTopics,
};

function getTopics() {
	const requestOptions = {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' }
	};
	return fetch(`${apiConstants.API_URL}/api/topics`, requestOptions)
		.then(handleResponse)
		.then(topics => {
			console.log(topics,'response');
			return topics;
		});
}

function handleResponse(response) {
	
	return response.text().then(text => {
		const data = text && JSON.parse(text);
		if (!response.ok) {
			if (response.status === 401) {
				// auto logout if 401 response returned from api
                
				// location.reload(true);
			}
  
			const error = (data && data.message) || response.statusText;
			return Promise.reject(error);
		}
  
		return data;
	});
}