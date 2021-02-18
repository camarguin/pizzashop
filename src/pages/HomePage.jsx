import React from 'react';

import Home from '../components/Home/Home';
import Poppizzas from '../components/PopPizzas/Poppizzas';
import Pizzaoftheday from '../components/PizzaOfTheDay/Pizzaoftheday';
import Footer from '../components/Footer/Footer';

const HomePage = () => {
    return (
        <>
            <Home />
            <Poppizzas />
            <Pizzaoftheday />
            <Footer />
        </>
    );
};

export default HomePage;