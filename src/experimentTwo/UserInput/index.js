import React from 'react';

const userInput = (props) => {
    const inputStyle = {
        border: '2px dotted blue'
    };

    return <input
        type='text'
        style={inputStyle}
        onChange={props.changed}
        value={props.currentName} />;
};

export default userInput;