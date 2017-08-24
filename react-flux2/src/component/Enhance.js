import React,{Component} from 'react';


export const Enhance = ComposedComponent =>  class extends Component {//state管理まで含めたコンポーネント&表現が違うものを使いまわせる
    constructor(){
        super();
        this.state = {data: null};
    }
    componentDidMount(){
        this.setState({data: 'Hello'});
    }
    render(){
        return (
            <ComposedComponent {...this.props} data={this.state.data} />
        )
    }
}
