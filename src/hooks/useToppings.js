import { useState } from 'react';

const useToppings = (defaultTopping) => {
    const [toppings, setToppings] = useState(defaultTopping || getDefaultToppings());
    const checkTopping = (index) => {
        const newToppings = [...toppings];
        newToppings[index].checked = !newToppings[index].checked;
        setToppings(newToppings);
    }
    return {
        checkTopping,
        toppings
    }
}
const toppingsList = [
    "Extra Cheese",
    "Pepperoni",
    "Sausage",
    "Onions",
    "Tomato",
    "Pineapple",
    "Mushrooms",
    "Bacon",
    "Potato"
];

export const getDefaultToppings = () => {
    return toppingsList.map(topping => ({
        name: topping,
        checked: false
    }))
}

export default useToppings;