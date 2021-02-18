import React from 'react';

import './Toppings.css';

const Toppings = ({ toppings, checkTopping }) => {
    return (
        <div className="Toppings">
            <div className="ToppingsGrid">
                {toppings.map((topping, index) => (
                    <div className="Topping">
                        <label htmlFor={index}>
                            <input type="checkbox" name={topping.name} id={index} checked={topping.checked} onClick={() => {
                                checkTopping(index);
                            }} />
                            {topping.name}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Toppings;