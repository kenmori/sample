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
        render(){
            return <CompositedComponent {...this.props} name={this.state.name} func={func} />
        }
    }
}