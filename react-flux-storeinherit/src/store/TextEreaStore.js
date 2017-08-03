import Store from '../store/Store';
import Dispatcher from '../dispatcher/Dispatcher';

export class TextAreaStore extends Store {
    constructor(){
        super();
        this.textValue = '';
    }
    emitStore(){
        this.emit();
    }
    addEventListener(type, callback){
        this.on(type, callback);
    }
    set textValue(value){
        this.textValue = value;
    }
    get textValue(){
        return this.textValue;
    }
}


dispatch.register(function(action){
    switch (action.type){
        case ActionType.CHANGESTATE :
            TextAreaStore.emitStore();
            break;
    }
})