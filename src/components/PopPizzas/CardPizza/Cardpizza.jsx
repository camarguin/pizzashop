import React from 'react';

import './Cardpizza.css';

const Cardpizza = (props) => {
    return (
        <div className="Cardpizza">
            <img src={props.pizzaimg} alt="" />
            <h2>{props.pizzaname}</h2>
            <p>{props.ingredients}</p>
        </div>
    );
};

export default Cardpizza;