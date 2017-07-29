import Dispatcher from '../dispatcher/Dispatcher';

export default {
    sendInput: function(action){
        console.log(action);
        Dispatcher.dispatch(action);
    }
}
