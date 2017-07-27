
import {EventEmitter} from 'events';
import Dispatcher from '../dispatcher/Dispatcher';
import ActionTypes from '../data/CounterActionTypes';

let counter = {
    counter: 0
}
let counter2 = {
    counter: 0
}


class CounterStore extends EventEmitter {
    constructor(menuId){
        super();
        this.menuId = menuId;
    }
    getAll(){
        return counter;
    }
    emitChange(action){
        this.emit(action)
    }
    addEventListener(callback){
        this.on(ActionTypes.UP, callback)
    }
    removeEventListener(callback){
        this.removeListener(ActionTypes.UP, callback);
    }
    add(){
        ++counter.counter;
    }
    toString(){
        console.log(this.menuId);
    }
}

class CounterSecondStore extends EventEmitter {
    constructor(menuId){
        super();
        this.menuId = menuId;
    }
    getAll(){
        return counter2;
    }
    emitChange(action){
        this.emit(action)
    }
    addEventListener(callback){
        this.on(ActionTypes.UPSECOND, callback)
    }
    removeEventListener(callback){
        this.removeListener(ActionTypes.UPSECOND, callback);
    }
    add2(){
        ++counter2.counter;
    }
    toString(){
        console.log(this.menuId);
    }
}


export var CounterStoreIns = new CounterStore(1111);
export var CounterSecondStoreIns = new CounterSecondStore(2222);

Dispatcher.register((action)=>{
    switch (action.type){
        case ActionTypes.UP:
            CounterStoreIns.add();
            CounterStoreIns.toString();
            CounterStoreIns.emitChange(ActionTypes.UP);
    }
})

Dispatcher.register((action)=> {
    switch (action.type) {
        case ActionTypes.UPSECOND:
            CounterSecondStoreIns.add2();
            CounterSecondStoreIns.toString();
            CounterSecondStoreIns.emitChange(ActionTypes.UPSECOND);
    }
})