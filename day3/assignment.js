console.log('assignment')
// list of products
const market = [
    {
        productName: "Kit Kat",
        price: 20
    },
    {
        productName: "Lays",
        price: 10
    },
    {
        productName: "Pepsi",
        price: 60
    },
    {
        productName: "Ice Cream",
        price: 40
    }
];

const userDetails = [
    {
        userName: "Akshat",
        age: 21,
        products: [
            {
                productId: 0,
                quantity: 2
            },
            {
                productId: 2,
                quantity: 1
            }
        ]
    }
];

const addNewUser = (name, age, products = []) => {
    userDetails.push({
        userName: name,
        age,
        products
    });
    console.log('New user added!');
};

const addToCart = (userId, index, quantity) => {
    const user = userDetails[userId];

    const alreadyInCart = user.products.find(p => p.productId === index);

    if (alreadyInCart) {
        alreadyInCart.quantity += quantity;
        console.log(`Added ${quantity} more ${market[index]["productName"]} to cart`);
    } else {
        userDetails[userId].products.push({
            productId: index,
            quantity
        });
        console.log(`${market[index]["productName"]} x ${quantity} added to cart!`);
    }

};

const getPrice = (productId) => {
    return market[productId]["price"];
}

const getBill = (userId) => {
    const user = userDetails[userId];
    const cart = user.products;
    
    let total = 0;

    console.log(`Bill for ${user.userName}:`);

    cart.forEach(item => {
        const product = market[item.productId];
        const cost = product.price * item.quantity;
        total += cost;
        console.log(`${product.productName} x ${item.quantity} = Rs.${cost}`);
    });

    console.log(`Your total is: ${total}`);
}

const getUserDetails = (age) => {
    const user = userDetails.find(u => u.age === age);
    return user;
}

// adding new user

addNewUser("Tom", 18);

// adding products to cart from market array
addToCart(0, 1, 2);
addToCart(1, 3, 1);

// get bill for a user
getBill(0);
getBill(1);