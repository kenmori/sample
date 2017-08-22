import React, {Component} from 'react';
import {BrowserRouter as IndexRoute, Redirect, Router, Route, NotFoundRoute, DefaultRoute, Link, RouteHandler} from 'react-router-dom';
import PropTypes from 'prop-types';
import { Switch } from 'react-router'
import About from './About';
import Features from './Features';
import Home from './Home';
import Header from './Header';
import Form from './Form';
import NoMatch from './NoMatch';
import Counter from './Counter';
import WrapComp from './WrapComp';

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
                    <Route path='/feature' render={ (props) => <Features {...this.props} />} />
                    <Route path='/form' render={ (props) => <Form {...this.props} />} />
                    <Route path='/counter' render={ (props) => <Counter {...this.props} />} />
                    <Route path='/hoc' render={ (props) => <WrapComp {...this.props} />} />
                    <Route component={NoMatch}/>
                </Switch>
            </div>
        )
    }
}


export default App