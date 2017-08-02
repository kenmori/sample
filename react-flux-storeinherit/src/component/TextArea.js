
import React, {Component} from 'react';
import TextAreaAction from '../action/TextAreaAction';
import TextAreaType from '../data/TextAreaType';


export default class TextArea extends Component {
    constructor(){
        super();
        this.onchangetext = this.onchangetext.bind(this);
        this.changeState = this.changeState.bind(this);
        this.state = {
            textValue: ""
        }
    }
    componentDidMount(){
        TextAreaStore.addEventListener(this.changeState);
    }
    changeState (){
        this.setState({})
    }
    onchangetext(e){
        TextAreaAction.setValue({type: TextAreaType.CHANGE_STATE, textValue: e.target.value});
    }
    render(){
        return (
            <div><textarea onChange={this.onchangetext} /></div>
        )
    }
}