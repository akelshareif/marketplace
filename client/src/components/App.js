import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';
import * as actions from '../actions';
import Header from './header/Header';
import Landing from './Landing';
import Login from './login/Login';
import SignUp from './login/SignUp';
import '../styles.css';

 
class App extends React.Component {

    componentDidMount() {
        this.props.fetchUser();
    }

    render(){
        return(
            <div>
                <BrowserRouter>
                    <Header>
                        <Route path='/' exact component={Landing} />
                        <Route path='/login' exact component={Login} />
                        <Route path='/login/create' component={SignUp} />
                    </Header>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, actions)(App);