import React, { Component } from 'react';

class Validation extends Component {
    lengthValidation = () => {
        if (this.props.length <= 5){
            return("your input is too short.") 
        } else {
            return("your input is long enough.") 
        }
    };

    render () {
        return (        
            <>
                <p>
                    Your text is {this.props.length} character(s) long. That means {this.lengthValidation()}
                </p>
            </>
        );
    };
};

export default Validation;