import React ,{Component} from 'react';
import InputStore from '../store/InputStore';
import InputAction from '../action/InputAction';
import InputActionType from '../data/InputActionType';

class Input extends Component {
    constructor(){
        super();
        this.state = this.getInput();
        this.onchangeText = this.onchangeText.bind(this);
        this.setStateInput = this.setStateInput.bind(this);
        this.getInput = this.getInput.bind(this);
    }

    componentDidMount(){
        InputStore.prototype.addEventListener(this.setStateInput);
    }
    setStateInput(value){
        console.log(value, 'setStateInput');
        this.setState(this.getInput(value))
    }
    getInput (value){
        return InputStore.prototype.getInputfafa(value)
    }
    onchangeText (e){
        console.log(e.target.value);
        InputAction.sendInput({type: InputActionType.CHANGE_INPUT_VALUE, value: e.target.value});
    }
    render(){
        return(
            <div>
                <input type="text" placeholder="入力してください" value={this.state.inputValue} onChange={this.onchangeText} />
                {this.state.inputValue}
            </div>
        )
    }
}

export default Input