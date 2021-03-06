import React from 'react';
import { BsTrash } from 'react-icons/bs'
import { formatPrice } from '../../data/FoodData';
import { getPrice } from '../ItemDetails/FoodDialog';

import './Order.css';

const Order = ({ orders, setOrders }, props) => {
    const subtotal = orders.reduce((total, order) => {
        return total + getPrice(order);
    }, 0);

    const tax = subtotal * 0.07;
    const total = subtotal + tax;

    const deleteItem = (index) => {
        const newOrders = [...orders];
        newOrders.splice(index, 1);
        setOrders(newOrders)
    }

    return (
        <>
            <div className="Order" style={props.style}>
                {orders.length === 0 ?
                    <div>Your cart is empty</div> :
                    <div>
                        <div className="orderContainer">
                            Your order:
                        </div>{" "}
                        {orders.map((order, i) => (
                            <div key={i} className="orderContainer">
                                <div className="orderItem">
                                    <div>{order.quantity}</div>
                                    <div>{order.name}</div>
                                    <div>{formatPrice(getPrice(order))}</div>
                                    <div id="removeBtn" onClick={() => { deleteItem(i) }}>{ }<BsTrash /></div>
                                </div>
                                <div className="detailItem">
                                    <p>Toppings: {order.toppings.filter(t => t.checked).map(topping => topping.name).join(", ")}</p>
                                    <div>{order.size && <p>Size: {order.size}</p>}</div>
                                </div>
                            </div>
                        ))}
                    </div>}
                <div className="orderFooter">
                    <div className="subtotalLabel">
                        <h4>Subtotal: {formatPrice(subtotal)}</h4>
                    </div>
                    <div className="taxLabel">
                        <h4>Tax: {formatPrice(tax)}</h4>
                    </div>
                    <div className="totalLabel">
                        <h4>Total: {formatPrice(total)}</h4>
                    </div>
                    <div className="checkoutButton">
                        <button>Checkout</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Order;