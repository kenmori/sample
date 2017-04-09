import React, {Component} from 'react';
import {BrowserRouter as  IndexRoute, Redirect, Router, Route, NotFoundRoute, DefaultRoute, Link, RouteHandler} from 'react-router-dom';
import About from './About';
import Features from './Features';

class App extends Component {
    render(){
        return (
            <div>
                <h1>App</h1>
                <ul role="nav">
                    <li><Link to="/home/about">About</Link></li>
                    <li><Link to="/home/feature">feature</Link></li>
                </ul>
                <Route path='/home/about'component={About} />
                <Route path='/home/feature' component={Features} />
            </div>
        )
    }
}

export default App