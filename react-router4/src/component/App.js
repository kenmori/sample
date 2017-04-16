import React, {Component} from 'react';
import {BrowserRouter as IndexRoute, Redirect, Router, Route, NotFoundRoute, DefaultRoute, Link, RouteHandler} from 'react-router-dom';
import { Switch } from 'react-router'
import About from './About';
import Features from './Features';
import Home from './Home';
import NoMatch from './NoMatch';

class App extends Component {
    render(){
        return (
            <div>
                <h1>App</h1>
                <ul role="nav">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to={{pathname: '/feature', state: { fromDashboard: true }}}>feature</Link></li>
                </ul>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path='/about'component={About} />
                    <Route path='/feature' component={Features} />
                    <Route component={NoMatch}/>
                </Switch>
            </div>
        )
    }
}

export default App