import React, { Component } from 'react';

class UserInput extends Component {
    render() {
        return (
            <div>
                <input username={this.props.value}></input>
            </div>
        )
    }
}

export default UserInput;