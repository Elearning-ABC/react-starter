import { combineEpics } from 'redux-observable';
import { userEpic } from './components/user/user.effect';

export const rootEpic = combineEpics(
    userEpic,
);