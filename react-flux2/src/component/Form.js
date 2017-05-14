import React, {Component} from 'react';
import FormStore from '../store/FormStore';
import FormActionCreater from '../actions/FormActionCreater';
import FormAxtionTypes from '../constants/FormActionTypes';
class Form extends Component {
    constructor(props) {
        super(props);
        this._submit = this.submit.bind(this);
        this._upDateState = this._upDateState.bind(this);
        this._getAll = this._getAll.bind(this);
        this.state = this._getAll();
    }
    componentDidMount(){
        FormStore.addEventListener(this._upDateState);
    }
    _getAll(){
        return FormStore.getAll();
    }
    _upDateState(){
        this.setState(this._getAll());
    }
    _submit(){
        FormActionCreater.submit({type: FormAxtionTypes.CHANGE, value: document.querySelector('text').value});
    }
    render(){
        return (
            <form method='POST'>
                <input type='text' id='text' value={this.state.text}/>
                <button onClick={this._submit}>submit</button>
            </form>
        )
    }
}

export default Form;