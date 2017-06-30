import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ReactSVG from 'react-svg'

import 'babel-polyfill';


class Greet extends Component {
 render() {
  var SurveyAccessLogApiClient = {
   post: function(param){
    return param;
   }
  }
  var isTarget = function(target){
    return target !== '' && target.substr(1).indexOf('adv_id') >= 0
  }
  var valFun = function(target){
    return target.substr(1).split('=')[1];
  }

  var runSurvery = function (url, fun){
    if(isTarget(url)){
     return fun.post({satori_id: "9090", adv_id : valFun(url)});
    }
  }

  console.log(runSurvery('http://fafafa/?adv_id=fafa', SurveyAccessLogApiClient));
  return (
      <div></div>
  )
 }
}
window.addEventListener('DOMContentLoaded', ()=>{
 ReactDOM.render(<Greet />, document.querySelector('main'));
})

