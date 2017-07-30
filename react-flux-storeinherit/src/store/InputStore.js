import {EventEmitter} from 'events';
import {Store} from '../store/Store';
import Dispatcher from '../dispatcher/Dispatcher';
import InputActionType from '../data/InputActionType';

export default class InputStore extends EventEmitter {
    constructor(){
        super();
        this.inputValue = '';
        this.getInputfafa = this.getInputfafa.bind(this)
        this.emitInput = this.emitInput.bind(this)
    }
    getInputfafa(value){
        return {
            inputValue : this.inputValue = value
        }
    }
    addEventListener(callback){
        // Store.on(callback);
        this.on(InputActionType.CHANGE_INPUT_VALUE, callback);
    }
    removeEventListener(callback){
        this.removeEventListener(ActionType.CHANGE_INPUT_VALUE, callback);
    }
    emitInput(action){
        console.log(action)
        this.emit(action.type, action.value);
    }
}

Dispatcher.register((action) => {//コールバック関数内に登録
    switch (action.type){//action.type
        case InputActionType.CHANGE_INPUT_VALUE : //actionTypeを使う
            console.log(action)
            InputStore.prototype.emitInput(action);
    }
});



