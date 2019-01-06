import { topicsConstant } from '../constants';

export function topics(state = {}, action) {
	console.log(action, 'topic');
	switch (action.type) {
	case topicsConstant.GET_TOPICS:
		return {
			topics: action.topics
		};
	default:
		return state;
	}
}
