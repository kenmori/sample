import React, {Component} from 'react';

export class Log extends Component {
    _log(methodName, args){
        console.log(methodName, args);
    },
    componentWillUpdate(methodName, args){
        this._log('componentWillUpdate', arguments);
    }
    componentDidUpdate(){
        this._log('componentDidUpdate', arguments);
    }
    componentWillMount(){
        this._log('componentWillMount', arguments);
    }
    componentDidMount(){
        this._log('componentDidMount', arguments);
    }
    componentWillUnmount(){
        this._log('componentWillUnmount', arguments);
    }
}

