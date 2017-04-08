import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {browserHistory, Route, NotFoundRoute, DefaultRoute, Link, RouteHandler} from 'react-route';

import 'babel-polyfill';


class Greet extends Component {
 render() {
  return (
   <Router history={browserHistory} />
  )
 }
}
window.addEventListener('DOMContentLoaded', ()=>{
 ReactDOM.render(<Greet />, document.querySelector('main'));
})

