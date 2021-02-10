import React from 'react';
import Button from '../Button/Button';

import './Pizzaoftheday.css';

const Pizzaoftheday = () => {
    return (
        <div className="Pizzaoftheday">
            <h1>Pizza of the day</h1>
            <h2>Italian Extra</h2>
            <p>Marinara sauce, basil, italian sausage, roma tomatoes, olives and pesto</p>
            <Button>Order Now</Button>
        </div>
    );
};

export default Pizzaoftheday;