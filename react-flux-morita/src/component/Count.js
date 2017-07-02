import React, {Component} from 'react';

export default class extends Component {
    increment = () => {
        console.log("fafa")
    }
    render(){
        return (
            <div>
                <button onClick={this.increment}>click</button>
            </div>
        )
    }
}

