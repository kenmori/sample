import R from 'ramda';
//値をラッピングするための関数データ型
export default class Wrapper {
    constructor(value){
        this._value = value;
    }
    //map:: (A -> B ) -> Wrapper(A) -> B
    map(f){
        return f(this._value);
    }
    toString() {
        return 'Wrapper (' + this._value + ')';
    }
    fmap(f){
        return wrap(f(this._value));
    }

}
//wrap :: A -> Wrapper(A)
export const wrap = function(val){ return new Wrapper(val)}

const curryed = R.curry((a, b)=> a + b);

console.log(curryed, "fafa");

var pluse3 = curryed(3);

console.log(pluse3(4), 'pluse3 anserwer');



console.log(wrap(3).fmap(pluse3).fmap(pluse3).map(R.identity));

import {Student, Person} from './Person';


var student = new Student('kenji', 'morita', 111, 'japan');
console.log(student, 'student');

console.log(student.__proto__ === Student.prototype);

console.log(Student.prototype.__proto__ === Person.prototype);

class Empty {
    map(f){
        return this;
    }
    fmap(){
        return new Empty();
    }
    toString(){
        return 'Empty ()';
    }
}

const empty = () => new Empty();


const isEven = (n) => Number.isFinite(n) && (n % 2 == 0);
const half = (val) => isEven(val) ? wrap(val / 2) : empty();

console.log(half(4));
console.log(half(5));

class WrapperMonado {
    constructor(value){//型コンストラクタ
        this._value = value;
    }
    static of(a){// ユニット関数: ある型の値をモナド構造に挿入する(wrapやemptyに似ている)
        return new WrapperMonado(a);
    }
    map(f){//バインド関数(ファンクター):処理をチェーン化する(flatMap)
        return WrapperMonado.of(f(this._value));
    }
    join(){//結合処理: モナド構造のレイヤーを単層に平坦化する(入れ子になった層を平坦化する)
        if(!(this._value instanceof WrapperMonado)){
            return this._value.join();
        }
    }
    get(){
        return this._value;
    }
    toString(){
        return `WrapperMonado(${this._value})`;
    }
}

console.log(WrapperMonado.of('Hello Monados!').map(R.toUpper).map(R.identity));// -> WrapperMonado('HELLO MONADOS')


class Maybe {
    static just(a){
        return new Just(a);
    }
    static nothing (){
        return new Nothing();
    }
    static fromNullable(a) {
        return a !== null ? Maybe.just(a) : Maybe.nothing();
    }
    static of(a) {
        return just(a);
    }
    get isNothing(){
        return false;
    }
    get isJust(){
        return false;
    }
}

class Just extends Maybe {
    constructor(value) {
        super();
        this._value = value;
    }
    get value(){
        return this._value;
    }
    map(f){
        return Maybe.fromNullable(f(this._value));
    }
    getOrElse(){
        return this._value;
    }
    filter(f){
        Maybe.fromNullable(f(this._value) ? this._value : null);
    }
    chain(f){
        return f(this._value);
    }
    toStoring(){
        return  `Maybe.just(${this._value})`;
    }
}


class Nothing extends Maybe {
    map(f){
        return this;
    }
    get value(){
        throw new TypeError("Can't extract the value of a Nothing");
    }
    getOrElse(other){
        return other;
    }
    filter(f){
        return this;
    }
    chain(f){
        return this;
    }
    toString(){
        return 'Maybe.Nothing';
    }
}