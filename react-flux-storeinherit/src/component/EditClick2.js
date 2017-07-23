import React, {Component} from 'react';
import {BrowserRouter as Link} from 'react-router-dom';
import { Prompt } from 'react-router';
import {CounterStoreIns} from '../store/CountStore';
import CountActions from '../action/CountActions';
import ActionTypes from '../data/CounterActionTypes';

class  EditClick2 extends Component {
    constructor(props){
        super(props)
        this.click = this.click.bind(this);
        this.getState = this.getState.bind(this);
        this.getCounterState = this.getCounterState.bind(this);
        this.state = this.getCounterState();
    }
    componentDidMount(){
        CounterStoreIns.addEventListener(this.getState);
    }
    click (){
        CountActions.counter({actionType: ActionTypes.UP, counter: this.state.counter + 1});
    }

    getState(){
        this.setState(this.getCounterState());
    }
    getCounterState (){
        return CounterStoreIns.getAll()
    }
    render(){
        return (
            <div>
                <h1>EditClick2</h1>
                Count here!!
                <button onClick={this.click}>click</button>
                    {this.state.counter}
                <button onClick={this.click2}>click</button>
            </div>
        )
    }
}

export default EditClick2