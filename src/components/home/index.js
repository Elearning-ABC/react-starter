import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { setUser } from '../user/user.actions';
import './styles.scss';

const HomeScreen = ({user, setUser}) => {
    useEffect(() => {
        const userID = localStorage.getItem('userID');
        if (userID !== null) {
            setUser({userID});
        }
    }, []);

    return (
        <div className="homepage">USER ID: {user.userID}</div>
    );
}

function mapStateToProps(state, props) {
    return {
        user: state.userReducer
    }
}

export default connect(mapStateToProps, {setUser})(HomeScreen);