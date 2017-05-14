import {Dispatcher} from '../dispatcher/Dispatcher';
import FormActionTypes from '../constants/FormActionTypes';
import {EventEmitter} from 'events';
let data = {
    text: ''
}

const FormStore = Object.assign({}, EventEmitter.prototype, {
    getAll(){
        return data;
    },
    _emitChange(action){
        this.emit(action);
    },
    addEventListener(callback){
        this.on(FormActionTypes.CHANGE, callback);
    }
})


Dispatcher.register((action)=>{
    switch(action.type){
        case 'formsend':
            console.log("fafa");
            data.text = action.value;
            FormStore._emitChange(action.type);
            break;
    }
});

export default FormStore;