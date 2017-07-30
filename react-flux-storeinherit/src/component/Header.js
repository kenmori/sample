import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as IndexRoute, Redirect, Router, Route, NotFoundRoute, DefaultRoute, Link, RouteHandler} from 'react-router-dom';
class Header extends Component {
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props);
        return(
                <div>
                    <h1>App</h1>
                    <ul role="nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/count">Count</Link></li>
                        <li><Link to="/input">Input</Link></li>
                        <li><Link to="/textarea">TextArea</Link></li>
                        <li><Link to={{pathname: '/feature', state: { fromDashboard: true }}}>feature</Link></li>

                    </ul>
                </div>
            )
    }
}


export default Header;
