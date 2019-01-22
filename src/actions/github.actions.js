import { githubConstants } from '../constants';
import { githubService } from '../services';

export const githubActions = {
	githubConnect
};

function githubConnect() {
	return dispatch => { 
		githubService.githubConnect()
			.then(
				res => { 
					dispatch(success(res));
				},
				error => {
					// dispatch(failure(error.toString()));
					console.log('error', error);
				}
			);
	};
    
	function success(res) { return { type: githubConstants.CONNECT, res }; }
}