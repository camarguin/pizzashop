import React from 'react';
import CardItem from './CardItem/CardItem';
import { formatPrice } from '../../data/FoodData';

import './Ordering.css';
import { foods } from '../../data/FoodData';

const Ordering = ({ setOpenFood, openFood }) => {

    return (
        <div className="OrderPage">
            <h1>Menu</h1>
            <div className="OrderPageContainer">
                {Object.entries(foods).map(([sectionName, foods]) => (
                    <>
                        <h1>{sectionName}</h1>
                        <div className="FoodsGrid">
                            {foods.map((food, i) => (
                                <CardItem
                                    key={i}
                                    pizzaName={food.name}
                                    pizzaIngredients={food.ingredients}
                                    onClick={() => { setOpenFood(food) }} />

                            ))}
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
};

// () => { setOrders([...orders, order]); }

export default Ordering;