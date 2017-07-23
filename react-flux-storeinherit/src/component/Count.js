import React, {Component} from 'react';
import {BrowserRouter as Link} from 'react-router-dom';
import { Prompt } from 'react-router';
import {CounterStoreIns} from '../store/CountStore';
import {CounterSecondStoreIns} from '../store/CountStore';
import CounterActions from '../action/CountActions';
import ActionTypes from '../data/CounterActionTypes';

class Count  extends Component {
    constructor(props){
        super(props)
        this.click = this.click.bind(this);
        this.click2 = this.click2.bind(this);
        this.getState = this.getState.bind(this);
        this.getState2 = this.getState2.bind(this);
        this.getCounterState = this.getCounterState.bind(this);
        this.state = {
            click1 : this.getCounterState(),
            click2 : this.getCounterState2()
        }
    }
    componentDidMount(){
        CounterStoreIns.addEventListener(this.getState);
        CounterSecondStoreIns.addEventListener(this.getState2);
    }
    click (){
        CounterActions.counter({actionType: ActionTypes.UP, counter: this.state.click1.counter + 1});
    }
    click2(){
        CounterActions.counter2({actionType: ActionTypes.UPSECOND, counter: this.state.click2.counter + 1});
    }

    getState(){
        this.setState(this.getCounterState());
    }
    getState2(){
        this.setState(this.getCounterState2());
    }
    getCounterState (){
        return CounterStoreIns.getAll()
    }
    getCounterState2 (){
        return CounterSecondStoreIns.getAll()
    }
    render(){
        return (
            <div>
            <h1>Count</h1>
            Count here!!
                <button onClick={this.click}>click</button>
                {this.state.click1.counter}
                <button onClick={this.click2}>click2</button>
                {this.state.click2.counter}
            </div>
        )
    }
}

export default Count