import React from 'react';

const Alert = (props) => {

    return (
        <div> 
            {
                props.passwordRequired === true ? (
                    alert('Password must be 5 or more characters.'),
                    props.setPasswordRequired(false)
                )
                : props.incorrectPassword === true ? (
                    alert('Incorrect password.'),
                    props.setIncorrectPassword(false)
                )
                : props.emailNotExist === true ? (
                    alert('User does not exist.'),
                    props.setEmailNotExist(false)
                )
                : null
            }
        </div>
    );  
}

export default Alert;

