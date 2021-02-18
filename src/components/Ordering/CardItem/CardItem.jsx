import React from 'react';

import popPizza from '../../../media/PopPizza1.jpg';
import './CardItem.css';

const CardItem = (props) => {
    return (
        <div className="CardItem">
            <div className="imgContainer">
                <img src={popPizza} alt="" />
            </div>
            <div className="detailsContainer">
                <h3>{props.pizzaName}</h3>
                <p>{props.pizzaIngredients}</p>
                <button onClick={props.onClick}>Add to Cart</button>
            </div>


        </div>
    );
};

export default CardItem;