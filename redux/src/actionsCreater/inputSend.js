const SEND = 'SEND';

function send(value){
    return {
        type: SEND,
        value
    }
}
