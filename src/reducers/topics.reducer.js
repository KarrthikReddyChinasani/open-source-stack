import { topicsConstant } from '../constants';

export function topics(state = {'topics': { 'topicsByName':[], 'letters': []}}, action) {
	switch (action.type) {
	case topicsConstant.GET_TOPICS:
		return {
			topics: action.topics
		};
	default:
		return state;
	}
}
