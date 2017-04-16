import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './component/App';
import Home from './component/Home';
import {BrowserRouter as Switch, BrowserRouter, getUserConfirmation,browserHistory, IndexRoute, Redirect, Router, Route, NotFoundRoute, DefaultRoute, Link, RouteHandler} from 'react-router-dom';
import 'babel-polyfill';

let createElement = function(Component, props) {
    props.context = {user: 'kenji', isMenber: true};
    return <Component {...props} />;
};

const getConfirmation = (message, callback) => {
    const allowTransition = window.confirm(message)
    callback(allowTransition)
}


class Endpoint extends Component {
 render(){
      return (
          <BrowserRouter
                history={browserHistory}
                createElement={createElement}
                basename='/home/'
                getUserConfirmation={getUserConfirmation}
                >
            <div>
                <Route path='/' component={App} />
            </div>
          </BrowserRouter>
        )
     }
}
window.addEventListener('DOMContentLoaded', ()=>{
 ReactDOM.render(<Endpoint />, document.querySelector('main'));
})

