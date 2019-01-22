import { githubConstants } from '../constants';

export const githubService = {
	githubConnect
};

function githubConnect() {
	const requestOptions = {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' }
	};
	return fetch(`${githubConstants.OAUTH_URL}`, requestOptions)
		.then(handleResponse)
		.then(data => {
			return data;
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
