import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './component/App';
import {BrowserRouter as BrowserRouter, browserHistory, IndexRoute, Redirect, Router, Route, NotFoundRoute, DefaultRoute, Link, RouteHandler} from 'react-router-dom';
import 'babel-polyfill';

let createElement = function(Component, props) {
    props.context = {user: 'kenji', isMenber: true};
    return <Component {...props} />;
};


class Endpoint extends Component {
 render(){
      return (
          <BrowserRouter history={browserHistory} createElement={createElement} >
            <div>
                <Route path='/home/' component={App} />
                <Redirect from='/home' to='/home/' />
            </div>
          </BrowserRouter>
        )
     }
}
window.addEventListener('DOMContentLoaded', ()=>{
 ReactDOM.render(<Endpoint />, document.querySelector('main'));
})

