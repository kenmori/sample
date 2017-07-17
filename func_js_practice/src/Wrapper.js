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
}
//wrap :: A -> Wrapper(A)
export const wrap = function(val){ return new Wrapper(val)}


