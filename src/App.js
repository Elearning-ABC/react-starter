import './App.css';
import HomeScreen from './components/home';
import SigninScreen from './components/signin';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthenticatedRoute from './AuthenticatedRoute';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/signin" component={SigninScreen} />
                {/*<Route exact path="/signup" component={SignupScreen} /> */}
                <AuthenticatedRoute path="/" exact={true} component={HomeScreen} />
            </Switch>
        </Router>
    );
}

export default App;