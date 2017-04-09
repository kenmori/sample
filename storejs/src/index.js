import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'babel-polyfill';
import store from 'store';


class Greet extends Component {
 render() {
  store.set('user', true );

  alert(store.get('user'));
  return (
   <ul id='result'></ul>
  )
 }
}
window.addEventListener('DOMContentLoaded', ()=>{
 ReactDOM.render(<Greet />, document.querySelector('main'));
})

