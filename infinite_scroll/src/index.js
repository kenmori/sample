import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'babel-polyfill';
import 'lodash';
import $ from 'jquery';
import InfiniteScroll from 'react-infinite-scroller';


class Greet extends Component {
 render() {
  let enrollment = [
   {enrollment: 2, grade: 100},
   {enrollment: 2, grade: 80},
   {enrollment: 1, grade: 89},
  ];


  return (
   <ul className='container'>
      <article className="post">...</article>
  <article className="post">...</article>
  <article className="post">...</article>
      </ul>
  )
 }
}
window.addEventListener('DOMContentLoaded', ()=>{
 ReactDOM.render(<Greet />, document.querySelector('main'));
})

