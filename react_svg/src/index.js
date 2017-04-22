import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ReactSVG from 'react-svg'

import 'babel-polyfill';


class Greet extends Component {
 render() {
  console.log(ReactSVG)
  return (
   <ul id='result'>
             <div className='svg'>
      <ReactSVG
       path='./src/svg/banner_top_pr.svg'
               className='example'
      />
     </div>
      </ul>
  )
 }
}
window.addEventListener('DOMContentLoaded', ()=>{
 ReactDOM.render(<Greet />, document.querySelector('main'));
})

