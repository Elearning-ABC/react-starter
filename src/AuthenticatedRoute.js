import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AuthenticatedRoute = ({ component: Component, ...rest }) => {
    const userID = localStorage.getItem('userID');

    return (
        <Route
            {...rest}
            render={props =>
                userID !== null ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: '/signin', state: { from: props.location } }} />
                )
            }
        />
    )
}

export default AuthenticatedRoute;