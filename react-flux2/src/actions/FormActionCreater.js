import {Dispatcher} from '../dispatcher/Dispatcher';
import FormActionTypes from '../constants/FormActionTypes';

export const FormActionCreater = {
    submit(payload){
        Dispatcher.dispatch(payload);
    }
}