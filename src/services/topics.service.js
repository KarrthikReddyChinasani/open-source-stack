import { apiConstants } from '../constants';
import { authHeader } from '../helpers';

export const topicsService = {
	getTopics
};

function getTopics() {
	const requestOptions = {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' }
	};
	return fetch(`${apiConstants.API_URL}/api/gitHubTopics`, requestOptions)
		.then(handleResponse)
		.then(topics => {
			return getLettersObjects(topics);
		});
}

function getLettersObjects(items) {
	var letters = [];
	var topicsByName = [];
	items.forEach(function(item) {
		if (letters.indexOf(item.title[0].toUpperCase()) === -1) {
			letters.push(item.title[0].toUpperCase());
		}
	});
	letters = letters.sort();
	letters.forEach(function(letter) {
		var topic = {};
		topic.letter = letter;
		var topicsbyAlphabet = [];
		items.forEach(function(item) {
			if (item.title[0].toUpperCase() == letter) {
				topicsbyAlphabet.push(item);
			}
		});
		topic.values = topicsbyAlphabet;
		topicsByName.push(topic);
	});
	letters.unshift('All');
	return { topicsByName: topicsByName, letters: letters };
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
