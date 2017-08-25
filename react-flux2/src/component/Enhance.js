import React, {Component} from 'react';

export const Enhance = (CompositedComponent, func) => {
    return class extends Component {
        static defaultProps = {
            width: 100
        }
        state = {
            name: 'morita'
        }
        componentDidMount(){
            this.setState({
                name: 'morita'
            })
        }
        render(props, state, context){
            return <CompositedComponent {...props} name={this.state.name} func={func} />
        }
    }
}

const click = (name) =>{
    console.log(name);
}