import React, { Component } from 'react';
import "./style.css"

class CharBox extends Component {
    

    render () {
        return (        
            <>
                <p className="char">
                   {this.props.length.index}
                </p>
            </>
        );
    };
};

export default CharBox;