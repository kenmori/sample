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