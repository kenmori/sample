import React, {Component} from 'react';
import FormDisplay from '../component/FormDisplay';
import FormInput from '../component/FormInput';
import inputSend from '../actionsCreater/inputSend';
import FormReducer from '../reducer/FormReducer';

export class FormApp extends Component {
    render(){
        return (
            <div>
                <FormInput handleClick={this.props._onClick} />
                <FormDisplay data={this.props.value} />
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        value: state.value
    }
}
function mapDispatchToProps(dispatch){
    return {
        onClick(){
            dispatch(send(value));
        }
    }
}
const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FormApp);