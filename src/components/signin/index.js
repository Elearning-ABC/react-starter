import React, {useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {setUser} from '../user/user.actions';
import { connect } from 'react-redux';

const SigninScreen = ({setUser}) => {
    const history = useHistory();

    useEffect(() => {
        const userID = localStorage.getItem('userID');
        if (userID !== null) {
            history.push('/');
        }
    }, [history]);

    const signin = () => {
        localStorage.setItem('userID', 'user-id');
        setUser({userID: 'user-id'});
        history.push('/');
    }

    return (
        <Button onClick={signin}>Sign in</Button>
    )
}

function mapStateToProps(state, props) {
    return {
        user: state.userReducer,
    }
}

export default connect(mapStateToProps, {setUser})(SigninScreen);