import React, {Component} from 'react';
import {BrowserRouter as Link} from 'react-router-dom';
import { Prompt } from 'react-router';
import {FeatureActionCreater} from '../actions/FeatureActionCreater';//2 export const の場合は{}
import {FeatureActionTypes} from '../constants/FeatureActionTypes';
import {FeatureStore} from '../store/FeatureStore';
class Features  extends Component {
    constructor(props){
        super(props);
        this._sendData = this._sendData.bind(this);
        this._getState = this._getState.bind(this);
        this._getTextState = this._getTextState.bind(this);
        this.state = this._getTextState();
    }
    componentDidMount(){
        FeatureStore.addEventListener(this._getState);//Action.type送っていた
    }
    _sendData(){
        FeatureActionCreater.send({type: FeatureActionTypes.CHANGE, value: document.getElementById('text').value});
    }
    _getState(){
        this.setState(this._getTextState());//setStateを実行するエソッドをcallbackにする
    }
    _getTextState(){
        return FeatureStore.getAll();
    }
    render(){
        return (
            <div>
            <h1>Features</h1>
                Features here!!
                <input id="text" type="text" defaultValue="text here!!" />
                <button onClick={this._sendData}>send</button>
                <ul>{this.state.id}:{this.state.value}</ul>
            </div>
        )
    }
}

export default Features