import {EventEmitter} from 'events';
import Dispatcher from '../dispatcher/Dispatcher';//1
import {FeatureActionTypes} from '../constants/FeatureActionTypes';//5
import {Promise} from 'es6-promise';
import 'whatwg-fetch';
let data = {
    id: null,
    value: ''
};
// let myEmitter = new EventEmitter();//3 インスタンスを生成するのかどうか、見方
export const FeatureStore = Object.assign({}, EventEmitter.prototype, {
    addEventListener(callback){
        this.on(FeatureActionTypes.CHANGE, callback);
    },
    removeEventListener(callback){
        this.remove(FeatureActionTypes.CHANGE, callback);//文字列を渡していない
    },
    send(text){//オブジェクト内のメソッドの書き方
        data.value = text;
        fetch('http://localhost:3000/posts', {
            method: 'POST',
            body: JSON.stringify(data)
        }).then(function(data){
            return data;
        })
    },
    changeEmit(action){
        this.emit(action);
    },//4カンマ忘れ
    getAll(){
        console.log(data);
       return data;
    }
});

Dispatcher.register((action) => {
    switch(action.type){
        case 'change' :
            FeatureStore.send(action.value);
            FeatureStore.changeEmit(action.type);
            break;
    }
})


