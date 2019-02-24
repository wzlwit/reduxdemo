import React from 'react';
import { connect } from 'react-redux';

class UserDetail extends React.Component{
    render(){

        if (!this.props.user){
            return(<h4>please select an user</h4>)
        }
        return(
            <div>
                <img src={this.props.user.thumbnail} alt="this is for the user"></img>
                <h2>{this.props.user.first} {this.props.user.last}</h2>
                <h3>Age: {this.props.user.age}</h3>
                <h3>description: {this.props.user.description}</h3>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.activeUser
    }
}

export default connect(mapStateToProps)(UserDetail);
