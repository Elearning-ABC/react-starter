export const setUser = data => ({
    type: 'SET_USER',
    payload: data,
});

export const updateUser = (key, value) => ({
    type: 'UPDATE_USER',
    payload: {key, value},
});

export const removeUser = () => ({
    type: 'REMOVE_USER',
});