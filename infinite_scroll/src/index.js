import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'babel-polyfill';
import 'lodash';
import $ from 'jquery';
import InfiniteScroll from 'react-infinite-scroller';
import request from 'request';


class Greet extends Component {
 _loadFunc(){
  console.log("fafa");
  request(' http://localhost:3000/posts', function (error, response, body) {
   console.log('error:', error); // Print the error if one occurred
   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
   console.log('body:', body.length); // Print the HTML for the Google homepage.
  });
 }
 render() {
  console.log(request);
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

 </InfiniteScroll>
  )
 }
}
window.addEventListener('DOMContentLoaded', ()=>{
 ReactDOM.render(<Greet />, document.querySelector('main'));
})

