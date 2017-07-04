import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ReactSVG from 'react-svg'

import 'babel-polyfill';


class Greet extends Component {
 render() {
  return (
      <div></div>
  )
 }
}
window.addEventListener('DOMContentLoaded', ()=>{
 ReactDOM.render(<Greet />, document.querySelector('main'));
})

