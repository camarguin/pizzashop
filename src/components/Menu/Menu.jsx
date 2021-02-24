import React, { Children, useEffect, useState } from 'react';

import './Menu.css';
import PizzariaIcon from '../../media/PizzariaIcon.png';
import PizzaMenuIcon from '../../media/PizzaMenuIcon.svg';

const Menu = ({ style }) => {
    const [scrollClass, setScrollClass] = useState("Menu");

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);
    })
    const scrollHandler = () => {
        if (window.pageYOffset > 0) {
            setScrollClass("Menu Scrolled");
        } else {
            setScrollClass("Menu");
        }
    }

    return (
        <nav className={scrollClass} style={style}>
            <a href=""><img src={PizzariaIcon} alt="" /></a>
            <div className="menu-navbar">
                {/* <button>Menu <img src={PizzaMenuIcon} alt="" /></button> */}
            </div>
        </nav>
    );
};

export default Menu;