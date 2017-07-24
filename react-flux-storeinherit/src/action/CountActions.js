import Dispatcher from '../dispatcher/Dispatcher';
export default {
    counter: function(count){
        Dispatcher.dispatch({
            type: count.actionType,
            counter: count.counter
        });
    }
}

