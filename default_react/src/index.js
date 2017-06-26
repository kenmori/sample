import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'babel-polyfill';
import 'lodash';


class Greet extends Component {
 render() {
  let enrollment = [
   {enrollment: 2, grade: 100},
   {enrollment: 2, grade: 80},
   {enrollment: 1, grade: 89},
  ];

  //
  // console.log(enrollment.filter(elem => elem.enrollment >= 2).reduce((elem){
  //       return elem.grade / elem.length});
  //  );
  console.log(_.chain);


  return (
   <ul id='result'></ul>
  )
 }
}
window.addEventListener('DOMContentLoaded', ()=>{
 ReactDOM.render(<Greet />, document.querySelector('main'));
})

