import { searchConstants } from '../constants';

const initialState = { isSearchOpen: false };

export function search(state = initialState, action) {
	switch (action.type) {
	case searchConstants.modalOpen:
		return {
			isSearchOpen: true
		};
	case searchConstants.modalClose:
		return {
			isSearchOpen: false
		};
	default:
		return state;
	}
}
