import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { search } from './search.reducer';
import { topics } from './topics.reducer';

const rootReducer = combineReducers({
	authentication,
	registration,
	users,
	alert,
	search,
	topics
});

export default rootReducer;