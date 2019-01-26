import { githubConstants } from '../constants';

export const githubService = {
	githubConnect,
	githubToken
};

function githubConnect() {
	const requestOptions = {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' }
	};
	return fetch(`${githubConstants.OAUTH_URL}?client_id=18affc69905f556579bf`, requestOptions)
		.then(handleResponse)
		.then(data => {
			return data;
		});
}

function handleResponse(response) {
	console.log("res", response);
	return response.text().then(text => {
	
		return text;
	});
}


function githubToken(gitcode) {
	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json',
			'Access-Control-Request-Method':'*' },
		body: {
			client_id: '18affc69905f556579bf',
			client_secret: '19af9612d9c08ffa5e25157edc7419c18da8306d',
			code: gitcode,
			redirect_uri: 'https://localhost:8080/profile'
		}
	};
	return fetch('https://github.com/login/oauth/access_token', requestOptions)
		.then(handleResponse)
		.then(data => {
			console.log('karthik', data);
			return data;
		});
}
