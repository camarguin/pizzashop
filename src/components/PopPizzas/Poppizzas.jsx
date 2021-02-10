import React from 'react';
import Button from '../Button/Button';
import Cardpizza from './CardPizza/Cardpizza';

import './Poppizzas.css';
import pizza1 from '../../media/PopPizza1.jpg';
import pizza2 from '../../media/PopPizza2.jpg';
import pizza3 from '../../media/PopPizza3.jpg';

const Poppizzas = () => {
    return (
        <div className="Poppizzas">
            <div className="PoppizzasContainer">
                <h1>Popular Pizzas</h1>
                <hr />
                <div className="cardPizzasContainer">
                    <Cardpizza
                        pizzaimg={pizza1}
                        pizzaname="Supreme Pizza"
                        ingredients="Marinara sauce, basil, italian sausage, roma tomatoes, olives and pesto"
                    />
                    <Cardpizza
                        pizzaimg={pizza2}
                        pizzaname="Hawaiian Paradise"
                        ingredients="Tomato sauce, fior di latte, mozzarella, prosciutto cotto, sliced pineapple" />
                    <Cardpizza
                        pizzaimg={pizza3}
                        pizzaname="British Veggie "
                        ingredients="Tomato sauce, black olives, fresh basil, caramelized onions, extra virgin olive oil" />
                </div>
                <div className="PoppizzasBtnContainer">
                    <Button onClick={() => {
                        console.log("Hello")
                    }}>Full Menu</Button>
                </div>
            </div>
        </div>
    );
};

export default Poppizzas;