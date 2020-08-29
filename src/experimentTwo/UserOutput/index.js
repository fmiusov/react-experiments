import React from 'react';

import './style.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Username: {props.userName}</p>
            <p>Experiment Two</p>
        </div>
    );
};

export default userOutput;