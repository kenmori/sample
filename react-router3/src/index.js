import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {browserHistory, IndexRoute, Router, Route, NotFoundRoute, DefaultRoute, Link, RouteHandler} from 'react-router';
import App from './component/App';
import 'babel-polyfill';

window.addEventListener('DOMContentLoaded', ()=>{
 ReactDOM.render(<App />, document.querySelector('main'));
})

