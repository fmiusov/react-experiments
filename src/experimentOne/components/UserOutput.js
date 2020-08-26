import React, { Component } from 'react';
import UserInput from './UserInput';

class UserOutput extends Component {
    handleOutput = (props) => {
        return (
            <h5>Hello, {props.username}</h5>
        )
    }

    render() {
        return (
            <div>
                <p handleOutput username= {UserInput.props.username}></p>
                <p></p>
            </div>

        )
    }
}

export default UserOutput;