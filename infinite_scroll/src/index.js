import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'babel-polyfill';
import 'lodash';
import $ from 'jquery';
import InfiniteScroll from 'react-infinite-scroller';
import 'whatwg-fetch'


class Greet extends Component {
 constructor(){
  super();
  this.state = {
   track: []
  }
 }
 _loadFunc(){
  fetch(' http://localhost:3000/posts').then((res)=>{
   return res.json();
  }).then((res)=>{
   this.state.track.push(res);
   console.log(this.state.track);
  })
 }
 render() {
  let enrollment = [
   {enrollment: 2, grade: 100},
   {enrollment: 2, grade: 80},
   {enrollment: 1, grade: 89},
  ];


  return (
      <InfiniteScroll
  pageStart={0}
  loadMore={this._loadFunc.bind(this)}
  hasMore={true || false}
  loader={<div className="loader">Loading ...</div>}
 >
  {this.state.track.map(elem => {
  <div>{this.state.track}</div>
 })}
 </InfiniteScroll>
  )
 }
}
window.addEventListener('DOMContentLoaded', ()=>{
 ReactDOM.render(<Greet />, document.querySelector('main'));
})

