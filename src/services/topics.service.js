import { apiConstants } from '../constants';
import { authHeader } from '../helpers';

export const topicsService = {
	getTopics,
	likeTopic,
	getFavouritetopics
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

function likeTopic(topicId, like) {
	const userId = JSON.parse(localStorage.getItem('user')).id;
	// console.log(userId,'userId');
	const requestOptions = {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({ topicId, userId, like })
	};

	return fetch(`${apiConstants.API_URL}/api/addToFavourite/topic`, requestOptions)
		.then(handleResponse)
		.then(topic => {
			return topic;
		});
}

function getFavouritetopics() {
	const userId = JSON.parse(localStorage.getItem('user')).id;

	const requestOptions = {
		method: 'GET',
		headers: {'Content-Type': 'application/json'}
	};
	return fetch(`${apiConstants.API_URL}/api/favouritetopics?userId=` + userId , requestOptions)
		.then(handleResponse)
		.then(topics => {
			console.log(topics,'get all topics');
			return getLettersObjects(topics.favouriteTopicsList);
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
