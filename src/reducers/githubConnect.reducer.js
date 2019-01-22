import { githubConstants } from '../constants';

export function githubConnect(state = {}, action) {
	switch (action.type) {
	case githubConstants.CONNECT:
		return {
			github: action
		};
	default:
		return state;
	}
}
