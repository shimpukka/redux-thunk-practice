import React from 'react';
import { connect } from 'react-redux';

import { fetchUser } from '../actions';

class UserHeader extends React.Component {
    componentDidMount(){
        this.props.fetchUser(this.props.userId); // call action creator to update state
    }

    render(){
        return(
            <div>
                UserHeader
            </div>
        );
    }
}

export default connect(null, { fetchUser } )(UserHeader);