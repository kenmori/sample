import React, {Component} from 'react';
import {BrowserRouter as IndexRoute, Redirect, Router, Route, NotFoundRoute, DefaultRoute, Link, RouteHandler} from 'react-router-dom';
import PropTypes from 'prop-types';
import { Switch } from 'react-router'
import About from './About';
import Count from './Count';
import Input from './Input';
import TextArea from './TextArea';
import Playground from './Playground';
import Features from './Features';
import Home from './Home';
import Header from './Header';
import NoMatch from './NoMatch';


class App extends Component {
    constructor(props){
        super(props);
        console.log(this.props)
        this.state= {
            profile: 'kenji'
        }
    }
    render(){
        return (
            <div>
                <Header {...this.props} />
                <Switch>
                    <Route exact path="/" render={ props => <Home title={"I am Title"}
                        status={"Here is my status"} myprofile={this.state.myprofile} {...this.props} />}
                        />
                    <Route path='/about'render={ (props) => <About {...this.props} /> } />
                    <Route path='/count'render={ (props) => <Count {...this.props} /> } />
                    <Route path='/input'render={ (props) => <Input {...this.props} /> } />
                    <Route path='/textarea'render={ (props) => <TextArea {...this.props} /> } />
                    <Route path='/playground'render={ (props) => <Playground {...this.props} /> } />
                    <Route path='/feature' render={ (props) => <Features {...this.props} />} />
                    <Route component={NoMatch}/>
                </Switch>
            </div>
        )
    }
}


export default App