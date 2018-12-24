import { searchConstants } from '../constants';

const initialState = { isSearchOpen: false };

export function search(state = initialState, action) {
	switch (action.type) {
	case searchConstants.SEARCH_OPEN:
		return {
			isSearchOpen: true
		};
	case searchConstants.SEARCH_CLOSE:
		return {
			isSearchOpen: false
		};
	default:
		return state;
	}
}
