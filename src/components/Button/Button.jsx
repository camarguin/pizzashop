import React from 'react';
import { Link, HashRouter as Router } from 'react-router-dom';

import './Button.css'

const Button = (props) => {
    return (
        <Link className="Btn" to="/order">
            {props.children}
        </Link>
    );
};

export default Button;