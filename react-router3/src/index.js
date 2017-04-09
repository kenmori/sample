import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './component/App';
import {browserHistory, IndexRoute, Redirect, Router, Route, NotFoundRoute, DefaultRoute, Link, RouteHandler} from 'react-router';
import Home from './component/Home';
import About from './component/About';
import Features from './component/Features';
import 'babel-polyfill';

let createElement = function(Component, props) {
    props.context = {user: 'kenji', isMenber: true};
    return <Component {...props} />;
};


class Endpoint extends Component {
 render(){
  return (
      <Router history={browserHistory} createElement={createElement} >
        <Route path='/home/' component={App}>
            <IndexRoute component={Home} />
            <Route path='about'component={About} />
            <Route path='feature' component={Features} />
        </Route>
        <Redirect from='/home' to='/home/' />
      </Router>
    )
 }
}
window.addEventListener('DOMContentLoaded', ()=>{
 ReactDOM.render(<Endpoint />, document.querySelector('main'));
})

