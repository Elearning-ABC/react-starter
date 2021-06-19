import { combineReducers } from 'redux';
import userReducer from './components/user/user.reducer';

const rootReducer = combineReducers({
    userReducer,
});

export default rootReducer;