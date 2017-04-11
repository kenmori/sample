import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ReactSVG from 'react-svg'


class Greet extends Component {
 render() {
  return (
   <div>
      <ReactSVG
        path="/src/img/position.svg"
        callback={svg => console.log(svg)}
        className="example"
        style={{width: "100%"}}
         />
      </div>
  )
 }
}
window.addEventListener('DOMContentLoaded', ()=>{
 ReactDOM.render(<Greet />, document.querySelector('main'));
})

