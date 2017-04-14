import React, {Component} from 'react';
import {browserHistory, IndexRoute, Redirect, Router, Route, NotFoundRoute, DefaultRoute, Link, RouteHandler} from 'react-router';
import Home from './Home';
import About from './About';
import Features from './Features';

class App extends Component {
    render(){
        return (
            <div>
            <div>
            <h1>App</h1>
            <ul role="nav">
            <li><Link to="/home/about">About</Link></li>
            <li><Link to="/home/feature">feature</Link></li>
            </ul>
            {this.props.children}
    </div>
                </div>
        )
    }
}

export default App