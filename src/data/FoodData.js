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
import Sprite from '../media/Foods/sprite.jpg';
import Fanta from '../media/Foods/fanta.jpg';
import Coke from '../media/Foods/coke.jpg';

export function formatPrice(price) {
    return price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'CAD'
    })
}

export const foodItems = [
    {
        name: 'Veggie Pizza',
        img: Pizza1,
        ingredients: "Mozzarella cheese, tomato sauce, cherry tomatoes, basil, oregano",
        section: 'Pizzas',
        price: 7,
        sizes: ['Small - 8"', 'Medium - 10"', 'Large - 12"']
    },
    {
        name: 'Pepperoni Pizza',
        img: Pizza2,
        ingredients: "Mozzarella cheese, tomato sauce, pepperoni",
        section: 'Pizzas',
        price: 7,
        sizes: ['Small - 8"', 'Medium - 10"', 'Large - 12"']
    },
    {
        name: 'Mushlovers Pizza',
        img: Pizza3,
        ingredients: "Mozzarella cheese, tomato sauce, pepperoni, mushrooms, onions, black olives",
        section: 'Pizzas',
        price: 7,
        sizes: ['Small - 8"', 'Medium - 10"', 'Large - 12"']
    },
    {
        name: 'Broqui Pizza',
        img: Pizza4,
        ingredients: "Mozzarella cheese, tomato sauce, broccoli, onions, green peppers, cherry tomatoes, mushrooms",
        section: 'Pizzas',
        price: 7,
        sizes: ['Small - 8"', 'Medium - 10"', 'Large - 12"']
    },
    {
        name: 'Cheedar Pizza',
        img: Pizza5,
        ingredients: "Mozzarella cheese, tomato sauce, smoked bacon, cheddar cheese",
        section: 'Pizzas',
        price: 7.5,
        sizes: ['Small - 8"', 'Medium - 10"', 'Large - 12"']
    },
    {
        name: 'Hawasland Pizza',
        img: Pizza6,
        ingredients: "Mozzarella cheese, tomato sauce, smoked bacon, pineapple",
        section: 'Pizzas',
        price: 8,
        sizes: ['Small - 8"', 'Medium - 10"', 'Large - 12"']
    },
    {
        name: 'Broadway Pizza',
        img: Pizza7,
        ingredients: "Mozzarella cheese, tomato sauce, spinach, blue cheese",
        section: 'Pizzas',
        price: 9,
        sizes: ['Small - 8"', 'Medium - 10"', 'Large - 12"']
    },
    {
        name: 'Ricotta Pizza',
        img: Pizza8,
        ingredients: "Mozzarella cheese, Olive Oil sauce, ricotta cheese, cherry tomatoes, basil, oregano",
        section: 'Pizzas',
        price: 8,
        sizes: ['Small - 8"', 'Medium - 10"', 'Large - 12"']
    },
    {
        name: 'Brooklyn Pizza',
        img: Pizza9,
        ingredients: "Mozzarella cheese, tomato sauce, spanish chorizo, minced garlic, basil",
        section: 'Pizzas',
        price: 6.9,
        sizes: ['Small - 8"', 'Medium - 10"', 'Large - 12"']
    },
    {
        name: 'Oriental Pizza',
        img: Pizza10,
        ingredients: "Mozzarella cheese, tomato sauce, spanish chorizo, homemade spicy oriental pepper, cherry tomatoes, minced garlic",
        section: 'Pizzas',
        price: 7.9,
        sizes: ['Small - 8"', 'Medium - 10"', 'Large - 12"']
    },
    {
        name: 'Gastown Pizza',
        img: Pizza11,
        ingredients: "Mozzarella cheese, tomato sauce, handmade meatballs, olive oil sauce",
        section: 'Pizzas',
        price: 8.5,
        sizes: ['Small - 8"', 'Medium - 10"', 'Large - 12"']
    },
    {
        name: 'Delhi Pizza',
        img: Pizza12,
        ingredients: "Mozzarella cheese, tomato sauce, tandoori chicken",
        section: 'Pizzas',
        price: 7,
        sizes: ['Small - 8"', 'Medium - 10"', 'Large - 12"']
    },
    {
        name: 'Meatlovers Pizza',
        img: Pizza13,
        ingredients: "Mozzarella cheese, tomato sauce, pepperoni, Spanish chorizo, Italian sausage, Spanish sausage, handmade meatballs",
        section: 'Pizzas',
        price: 7,
        sizes: ['Small - 8"', 'Medium - 10"', 'Large - 12"']
    },
    {
        name: 'Parmesan Pizza',
        img: Pizza14,
        ingredients: "Mozzarella cheese, tomato sauce, blue cheese, ricotta cheese, cheddar cheese, parmesan cheese, oregano",
        section: 'Pizzas',
        price: 7.6,
        sizes: ['Small - 8"', 'Medium - 10"', 'Large - 12"']
    },
    {
        name: 'Zucchini Pizza',
        img: Pizza15,
        ingredients: "Mozzarella cheese, tomato sauce, zucchini, blue cheese, oregano",
        section: 'Pizzas',
        price: 7,
        sizes: ['Small - 8"', 'Medium - 10"', 'Large - 12"']
    },
    {
        name: 'Eggplant Pizza',
        img: Pizza16,
        ingredients: "Mozzarella cheese, tomato sauce, eggplant, ricotta cheese, oregano",
        section: 'Pizzas',
        price: 8,
        sizes: ['Small - 8"', 'Medium - 10"', 'Large - 12"']
    },
    {
        name: 'Miamore Pizza',
        img: Pizza17,
        ingredients: "Mozzarella cheese, tomato sauce, italian sausage, Spanish sausage",
        section: 'Pizzas',
        price: 13,
        sizes: ['Small - 8"', 'Medium - 10"', 'Large - 12"']
    },
    {
        name: 'Jalapeno Pizza',
        img: Pizza18,
        ingredients: "Mozzarella cheese, tomato sauce, mexican chicken, jalapenos, cheddar cheese",
        section: 'Pizzas',
        price: 7,
        sizes: ['Small - 8"', 'Medium - 10"', 'Large - 12"']
    },
    {
        name: 'Supermeat Pizza',
        img: Pizza19,
        ingredients: "Mozzarella cheese, tomato sauce, handmade meatballs, jalapenos, cheddar cheese",
        section: 'Pizzas',
        price: 7,
        sizes: ['Small - 8"', 'Medium - 10"', 'Large - 12"']
    },
    {
        price: 3,
        name: 'Sprite',
        img: Sprite,
        section: 'Drinks',
    },
    {
        price: 3,
        name: 'Coke',
        img: Coke,
        section: 'Drinks'
    },
    {
        price: 3,
        name: 'Fanta',
        img: Fanta,
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