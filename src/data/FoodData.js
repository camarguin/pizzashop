export function formatPrice(price) {
    return price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'CAD'
    })
}

export const foodItems = [
    {
        name: 'Cheese Pizza',
        img: "",
        section: 'Pizza',
        price: 1,
        sizes: ['Small', 'Medium', 'Large']
    },
    {
        name: 'Bacon Pizza',
        img: "",
        section: 'Pizza',
        price: 2,
        sizes: ['Small', 'Medium', 'Large']
    },
    {
        name: 'Tomato Pizza',
        img: "",
        section: 'Pizza',
        price: 1.5,
        sizes: ['Small', 'Medium', 'Large']
    },
    {
        name: 'Fruit Pizza',
        img: "",
        section: 'Pizza',
        price: 1.2,
        sizes: ['Small', 'Medium', 'Large']
    },
    {
        name: 'Chocolate Pizza',
        img: "",
        section: 'Pizza',
        price: 1.9,
        sizes: ['Small', 'Medium', 'Large']
    },
    {
        name: 'Cheese Pizza',
        img: "",
        section: 'Pizza',
        price: 3,
        sizes: ['Small', 'Medium', 'Large']
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