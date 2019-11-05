import React from 'react';
import './Button.scss'

const Button = ({onclick, children}) => {

    return(
        
        <button onClick={onclick}>{children}</button>
    );
}

export default Button;