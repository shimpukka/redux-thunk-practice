import React from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions'

class PostList extends React.Component {
    componentDidMount(){
        this.props.fetchPosts(); // call action creator after component gets rendered
    }

    render(){
        return <div>Postlist</div>;
    }
}

export default connect(null, { fetchPosts })(PostList);