import React, {Component} from 'react';
import {Enhance} from './Enhance';

class MyComp extends Component {
    render (){
        return (
            <div>
                {/*データを表示するだけ*/}
                {this.props.data}
            </div>
        )
    }
}
export default Enhance(MyComp);
