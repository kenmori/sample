import Dispatcher from '../dispatcher/Dispatcher';
export const FeatureActionCreater = {
    send: function(action){
        Dispatcher.dispatch(action);
    }
}
