import Dispatcher from '../dispatcher/Dispatcher';
import FormActionApiClient from '../api/FormActionApiClient';
export const FormActionCreater = {
    submit(payload){
        console.log('submit');
        FormActionApiClient.get(payload.data)
            .then(function(data){
                Dispatcher.dispatch(payload, data);
            })

    }
}