import React, {Component} from 'react';
import {Enhance} from './Enhance';

class WrapComp extends Component {
    constructor(){
        super();
        this.data = 1;
    }
    render (){
        if(!this.data) return <div>Waiting...</div>;
        return (
            <div>{this.data}</div>
        )
    }
}
export default Enhance(WrapComp);
