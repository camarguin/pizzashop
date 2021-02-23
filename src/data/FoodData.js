import Pizza1 from '../media/Foods/pizza1.jpg';
import Pizza2 from '../media/Foods/pizza2.jpg';
import Pizza3 from '../media/Foods/pizza3.jpg';
import Pizza4 from '../media/Foods/pizza4.jpg';
import Pizza5 from '../media/Foods/pizza5.jpg';
import Pizza6 from '../media/Foods/pizza6.jpg';
import Pizza7 from '../media/Foods/pizza7.jpg';
import Pizza8 from '../media/Foods/pizza8.jpg';
import Pizza9 from '../media/Foods/pizza9.jpg';
import Pizza10 from '../media/Foods/pizza10.jpg';
import Pizza11 from '../media/Foods/pizza11.jpg';
import Pizza12 from '../media/Foods/pizza12.jpg';
import Pizza13 from '../media/Foods/pizza13.jpg';
import Pizza14 from '../media/Foods/pizza14.jpg';
import Pizza15 from '../media/Foods/pizza15.jpg';
import Pizza16 from '../media/Foods/pizza16.jpg';
import Pizza17 from '../media/Foods/pizza17.jpg';
import Pizza18 from '../media/Foods/pizza18.jpg';
import Pizza19 from '../media/Foods/pizza19.jpg';
import Pizza20 from '../media/Foods/pizza20.jpg';



export function formatPrice(price) {
    return price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'CAD'
    })
}

export const foodItems = [
    {
        name: 'Cheese Pizza',
        img: Pizza1,
        section: 'Pizzas',
        price: 1,
        sizes: ['Small - 8"', 'Medium - 10"', 'Large - 12"']
    },
    {
        name: 'Bacon Pizza',
        img: Pizza2,
        section: 'Pizzas',
        price: 2,
        sizes: ['Small - 8"', 'Medium - 10"', 'Large - 12"']
    },
    {
        name: 'Tomato Pizza',
        img: Pizza3,
        section: 'Pizzas',
        price: 1.5,
        sizes: ['Small - 8"', 'Medium - 10"', 'Large - 12"']
    },
    {
        name: 'Fruit Pizza',
        img: Pizza4,
        section: 'Pizzas',
        price: 1.2,
        sizes: ['Small - 8"', 'Medium - 10"', 'Large - 12"']
    },
    {
        name: 'Chocolate Pizza',
        img: Pizza5,
        section: 'Pizzas',
        price: 1.9,
        sizes: ['Small - 8"', 'Medium - 10"', 'Large - 12"']
    },
    {
        name: 'Cheese Pizza',
        img: Pizza6,
        section: 'Pizzas',
        price: 3,
        sizes: ['Small - 8"', 'Medium - 10"', 'Large - 12"']
    },
    {
        price: 1,
        name: 'Sprite',
        section: 'Drinks',
        // choices: ['Coke', 'Sprite', 'Guarana']
    },
    {
        price: 1,
        name: 'Coke',
        section: 'Drinks'
    }
];

export const foods = foodItems.reduce((res, food) => {
    if (!res[food.section]) {
        res[food.section] = [];
    }
    res[food.section].push(food);
    return res;
}, {});