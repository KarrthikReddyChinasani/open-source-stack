import { topicsConstant } from '../constants';
import { topicsService } from '../services';
import { alertActions } from './';

export const topicsActions = {
	topics,
	likeTopic,
	favouriteTopics
};

function topics() {
	return dispatch => {
		topicsService.getTopics()
			.then(
				topics => {
					dispatch(success(topics));
				},
				error => {
					// dispatch(failure(error.toString()));
					console.log('error', error);
				}
			);
	};

	function success(topics) { return { type: topicsConstant.GET_TOPICS, topics }; }
}

function favouriteTopics() {
	topicsService.getFavouritetopics().then(topics => {
		return success(topics);
	},
	error => {
			alertActions.error("Unable to get Favourite list");
		console.log(error,'error')
	});
	function success(topics) { return { type: topicsConstant.GET_TOPICS, topics }; }
}

function likeTopic(id, isLiked){
		topicsService.likeTopic(id, isLiked).then(topic => {
			alertActions.success(topic.message)
		},
		error => {
			alertActions.error(error)
			console.log(error,'error');
		})
}
