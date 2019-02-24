import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectUser } from '../actions';

class UserList extends React.Component {
    createLists() {
        return this.props.users.map(user => {
            return (
                <li
                    key={user.id}
                    onClick={() => this.props.selectUser(user)}
                >
                    {user.first} {user.last}</li>
            )
        });
    }

    render() {
        return (
            <ul>
                {this.createLists()}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}
const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({ selectUser }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(UserList);
