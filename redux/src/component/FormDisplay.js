import React, {Component} from 'react';
export class FromDisplay extends Component {
    render(){
        return (
            <div>
                {this.props.value}
            </div>
        )
    }
}