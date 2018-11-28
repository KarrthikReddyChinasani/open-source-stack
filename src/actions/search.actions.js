import { searchConstants } from '../constants';

export const searchActions = {
	searchOpen,
	searchClose
};

function searchOpen() {
	return { type: searchConstants.SEARCH_OPEN };
}

function searchClose() {
	return { type: searchConstants.SEARCH_CLOSE };
}
