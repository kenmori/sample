import React, {Component} from 'react';
import {BrowserRouter as Link} from 'react-router-dom';
import { Prompt } from 'react-router';

class Features  extends Component {
    render(){
        return (
            <div>
            <h1>Features</h1>
                Features here!!
                    {/*<Prompt
                    message={ location => (`Are you soure ${location.pathname}`)}
                    when={true}
                    />*/}
            </div>
        )
    }
}

export default Features