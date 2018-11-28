import { searchConstants } from '../constants';

export const searchActions = {
	searchOpen,
	searchClose
};

function searchOpen() {
	return { type: searchConstants.modalOpen };
}

function searchClose() {
	return { type: searchConstants.modalClose };
}
