import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'babel-polyfill';
import Wrapper, {wrap} from './Wrapper';
import R from 'ramda';

class Greet extends Component {
 render() {
  ////////////////////////
  //値に対して複数の関数をマッピングするseq関数
  const seq = function(){
   const funcs = Array.prototype.slice.call(arguments);
   console.log(funcs);
   return function(val){
    funcs.forEach(
        (fun)=> {
          console.log(fun(val));
        }
    )
   }
  }
  const add = (a) => a + 3;
  const div = (a) => a - 4;
  const seqed = seq(add, div);
  ////////////////////////

  console.log(Wrapper, wrap);
  const WrappedValue = wrap('kenji');
  console.log(WrappedValue.map(R.toUpper));
  /////////////////////////////////////////////
  Wrapper.prototype.fmap = function(f){
   return wrap(f(this._value));
  }
  const plus = R.curry((a, b) => a + b);
  const plus3 = plus(3);
  const two = wrap(2);
  const five = two.fmap(plus3);
  console.log(five.map(R.identity));
  //5

  return (
   <ul id='result'>fafafa</ul>
  )
 }
}
window.addEventListener('DOMContentLoaded', ()=>{
 ReactDOM.render(<Greet />, document.querySelector('main'));
})

