import {Enhance} from './Enhance';
import React, {Component} from 'react';

class MyComponent extends Component {
    onclick = () =>{
        this.props.func(this.props.name)
    }
    render(){
        return (
            <div>
                <div>
                    {this.props.name}
                </div>
                <button onClick={this.onclick}>click</button>
            </div>
        )
    }
}
const click = (name) =>{
    console.log(name);
}

export default Enhance(MyComponent, click)