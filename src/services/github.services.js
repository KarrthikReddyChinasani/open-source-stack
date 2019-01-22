import { githubConstants } from '../constants';

export const githubService = {
	githubConnect
};

function githubConnect() {
	const requestOptions = {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' }
	};
	return fetch(`${githubConstants.OAUTH_URL}?client_id=18affc69905f556579bf&redirect_uri=${githubConstants.URL}/github`, requestOptions)
		.then(handleResponse)
		.then(data => {
			return data;
		});
}

function handleResponse(response) {
	return response.text().then(text => {
	
		return text;
	});
}
