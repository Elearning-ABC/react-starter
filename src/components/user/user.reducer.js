const initialState = {};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return action.payload;
        case 'UPDATE_USER':
            return {...state, [action.payload['key']]: action.payload['value']};
        case 'REMOVE_USER':
            return initialState;
        default:
            return state;
    }
}

export default userReducer;