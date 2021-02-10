import React from 'react';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import Pizzaoftheday from './components/PizzaOfTheDay/Pizzaoftheday';
import Poppizzas from './components/PopPizzas/Poppizzas';

const App = () => {
  return (
    <div>
      <Home />
      <Poppizzas />
      <Pizzaoftheday />
      <Footer />
    </div>
  );
};

export default App;
