import React, {Component} from 'react';
import {browserHistory, IndexRoute, Router, Route, NotFoundRoute, DefaultRoute, Link, RouteHandler} from 'react-router';
import Home from './Home';
import About from './About';
import Features from './Features';

class App extends Component {
    render(){
        return (
            <Router history={browserHistory} >
                <Route path='/' component={Home} />
                <Route path='about'component={About} />
                <Route path='feature' component={Features} />
            </Router>
        )
    }
}

export default App