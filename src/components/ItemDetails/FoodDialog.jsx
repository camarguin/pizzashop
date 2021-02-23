import React from 'react';
import { formatPrice } from '../../data/FoodData';
import useQuantity from '../../hooks/useQuantity';
import useToppings from '../../hooks/useToppings';
import useSize from '../../hooks/useSize';

import './FoodDialog.css';
import Toppings from './Toppings';
import Sizes from './Sizes';

const pricePerTopping = 0.5;

export const getPrice = (order) => {
    if (order.size === 'Small - 8"') {
        return 6 + order.quantity * (order.price + order.toppings.filter(t => t.checked).length * pricePerTopping);
    } if (order.size === 'Medium - 10"') {
        return 8 + order.quantity * (order.price + order.toppings.filter(t => t.checked).length * pricePerTopping);
    } if (order.size === 'Large - 12"') {
        return 10 + order.quantity * (order.price + order.toppings.filter(t => t.checked).length * pricePerTopping);
    } else {
        return order.quantity * (order.price + order.toppings.filter(t => t.checked).length * pricePerTopping);
    }
}
export const hasToppings = (food) => {
    return food.section === 'Pizzas';
}

const FoodDialogContainer = ({ openFood, setOpenFood, setOrders, orders }, props) => {
    const quantity = useQuantity(openFood && openFood.quantity);
    const toppings = useToppings(openFood.toppings);
    const sizeInput = useSize(openFood.size);

    const order = {
        ...openFood,
        quantity: quantity.value,
        toppings: toppings.toppings,
        size: sizeInput.value
    }
    const closeDialog = () => {
        setOpenFood();
    }
    const addToOrder = () => {
        setOrders([...orders, order]);
        console.log(order)
        closeDialog();
    }
    return (
        openFood ? (
            <>
                <div className="DialogShadow" onClick={closeDialog}></div>
                <div className="Dialog">
                    <img src="" alt="" />
                    <h1>{openFood.name}</h1>
                    <p>{openFood.ingredients}</p>
                    {hasToppings(openFood) && <>
                        <h3>Toppings:</h3>
                        <h5><small><i>+CA$0.50 each</i></small></h5>
                        <Toppings {...toppings} />
                    </>}
                    <div className="choicesBtnContainer">
                        {openFood.sizes && <Sizes openFood={openFood} sizeInput={sizeInput} />}
                        <div className="Quantity">
                            <h3>Quantity:</h3>
                            {/* <label htmlFor="quantity">Qty:</label> */}
                            <input id="quantity" max="20" value="1" type="number" {...quantity} />
                        </div>
                    </div>
                    <button onClick={addToOrder} disabled={openFood.sizes && !sizeInput.value}>Add to Cart - {formatPrice(getPrice(order))}</button>
                </div>
            </>
        ) : null
    )
}

const FoodDialog = (props) => {
    if (!props.openFood) return null;
    return <FoodDialogContainer {...props} />

}

export default FoodDialog;