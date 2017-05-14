import React, {Component} from 'react';
import {BrowserRouter as Link} from 'react-router-dom';

class Home  extends Component {
 render(){
     console.log(this.props)
    return (
        <div>
            <h1>Home</h1>
            home here!!
        </div>
    )
  }
}

export default Home