import { searchConstants } from '../constants';

const initialState = { isSearchOpen: false };

export function search(state = initialState, action) {
	switch (action.type) {
	case searchConstants.modalOpen:
		return {
			isModalOpen: true,
			user: action.user
		};
	case searchConstants.modalClose:
		return {
			isModalOpen: false,
			user: action.user
		};
	default:
		return state;
	}
}
