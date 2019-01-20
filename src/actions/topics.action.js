import { topicsConstant } from '../constants';
import { topicsService } from '../services';

export const topicsActions = {
	topics
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