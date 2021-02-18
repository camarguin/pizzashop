import React, { useState } from 'react';
import Ordering from '../components/Ordering/Ordering';
import MenuOrdering from '../components/Menu/MenuOrdering';
import useOpenFood from '../hooks/useOpenFood';
import useOrders from '../hooks/useOrders';
import Order from '../components/Order/Order';
import FoodDialog from '../components/ItemDetails/FoodDialog';

const OrderPage = () => {
    const openFood = useOpenFood();
    const orders = useOrders();
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

    const handlerCheckout = () => {
        setIsCheckoutOpen(!isCheckoutOpen);
    }

    return (
        <>
            {isCheckoutOpen && <Order {...orders} {...openFood} />}
            <MenuOrdering onClickCheckout={handlerCheckout} />
            <FoodDialog {...openFood} {...orders} />
            <Ordering {...orders} {...openFood} />
        </>
    );
};

export default OrderPage;