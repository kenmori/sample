import React, {Component} from 'react';

export class FormInput extends Component {
    constructor(props){
        super(props);
        this.send = this.send.bind(this);
    }
    send(e){
        e.preventDefault();
        this.props.handleClick(this.myInput.value.trim());
        this.myInput.value = '';
        return;
    }
    render(){
        return (
            <form>
                <input type="text" ref={(ref)=>(this.myInput = ref)} defaultValue="" />
                <button onClick={(event)=> this.send(event)}>送信</button>
            </form>
        )
    }
}
