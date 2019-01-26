import { topicsConstant } from '../constants';

export function topics(state = {'topics': { 'topicsByName':[], 'letters': []},'liked': { 'topicsByName':[], 'letters': []}}, action) {
	switch (action.type) {
	case topicsConstant.GET_TOPICS:
		return {
			topics: action.topics
		};
	case topicsConstant.GET_LIKED_TOPICS:
		return {
			liked: action.topics
		};
	default:
		return state;
	}
}
