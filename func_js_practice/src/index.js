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
  return (
   <ul id='result'>fafafa</ul>
  )
 }
}
window.addEventListener('DOMContentLoaded', ()=>{
 ReactDOM.render(<Greet />, document.querySelector('main'));
})

