
import {EventEmitter} from 'events';

import Dispatcher from '../dispatcher/Dispatcher';
import ActionTypes from '../data/CounterActionTypes';

let counter = {
    counter: 0
}
export const CounterStore = Object.assign({}, EventEmitter.prototype, {
    getAll: function(){
        return counter;
    },
    emitChange: function(counter){
        this.emit(ActionTypes.UP)
    },
    addEventListener: function(callback){
        this.on(ActionTypes.UP, callback)
    },
    removeEventL: function(callback){
        this.removeListener(ActionTypes.UP, callback);
    },
    add: function(){
        ++counter.counter;
    }
});


Dispatcher.register((action)=>{
    console.log(action)
    switch (action.type){
        case ActionTypes.UP:
            console.log(action.type)
            CounterStore.add();
            CounterStore.emitChange();
    }

})