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