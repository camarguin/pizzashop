import React from 'react';
import { HiOutlineShoppingBag } from 'react-icons/hi';

import './Menu.css';
import PizzariaIcon from '../../media/PizzariaIcon.png';
import PizzaMenuIcon from '../../media/PizzaMenuIcon.svg';

const MenuOrdering = (props) => {
    return (
        <nav className="MenuOrdering" >
            <a href=""><img src={PizzariaIcon} alt="" /></a>
            <div className="menu-navbar">
                <div className="buttonCheckout">
                    <button name="checkout" id="checkout" onClick={props.onClickCheckout}>Checkout <HiOutlineShoppingBag size="25px" /></button>
                    {/* <label htmlFor="checkout">2</label> */}
                </div>
                <button onClick={props.onClickMenu}>Menu <img src={PizzaMenuIcon} alt="" /></button>
            </div>
        </nav>
    );
};

export default MenuOrdering;