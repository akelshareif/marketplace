import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './header/Header';
import Landing from './Landing';
import Login from './Login';
import '../styles.css';
 
class App extends React.Component {

    componentDidMount() {
        this.props.fetchUser();
    }

    render(){
        return(
            <div>
                <BrowserRouter>
                    <div className='ui container'>
                        <Header />
                        <Route path='/' exact component={Landing} />
                        <Route path='/login' component={Login} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, actions)(App);