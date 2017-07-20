import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ReactSVG from 'react-svg'
import R from 'ramda';
import 'babel-polyfill';


class Greet extends Component {
 render() {

  const add = (a) => a + 1;
  const times2 = (a) => a * 2;
  const compose = (a, b) => (c) => a(b(c));
  console.log(compose(add, times2)(4));

  const greeting = (name) => `Hello ${name}`;
  const pipe = (fns) => (x) => fns.reduce((v, f) => f(v), x);
  const users = [{name: 'chet', age: 25}, {name: 'joe', age: 24}];

  console.log(
      R.pipe(
      R.sortBy(
          R.prop('age')
      ),
      R.map(R.prop('name')),
      R.join(', '),
      )(users)
  );

  console.log(greeting('kenji'))
  return (
      <div></div>
  )
 }
}
window.addEventListener('DOMContentLoaded', ()=>{
 ReactDOM.render(<Greet />, document.querySelector('main'));
})

