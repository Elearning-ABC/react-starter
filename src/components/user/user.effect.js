import { ofType } from 'redux-observable';
import { map } from 'rxjs/operators';

export const userEpic = action$ => action$.pipe(
    ofType('SET_USER'),
    map(action => {
        console.log('> effect', action);
        return {type: 'SET_USER_COMPLETE', payload: action.payload};
    })
);