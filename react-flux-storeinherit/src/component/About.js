import React, {Component} from 'react';

const CommentListWidthSubscription = withSubscription(CommentList, (DataSource) => DataSource.getComments());
const BlogPostWithSubscription = withSubscription(BlogPost, (DataSource, props) => DataSource.getComments(props.id));


function widthSubscription(WrappedComment, selectData){
    return class extends React.Component {
        constructor(props){
            super(props);
            this.handleChange = this.handleChange.bind(this);
            this.state = {
                data: selectData(DataSource, props)
            };
        }
        componentDidMount(){
            DataSource.addChangeListener(this.handleChange);
        }
    }
}

const About = () =>  <div> <h1>About</h1>About here!!</div>

export default About