const products = [
    { id: 1, name:'Laptop', price: 1200.00, image:'https://m.media-amazon.com/images/I/41QRstd1C5L._SY300_SX300_QL70_FMwebp_.jpg'},
    { id: 2, name:'Tablet', price: 500.00, image:'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    { id: 3, name:'Smartphone', price: 1000.00, image:'https://img.freepik.com/free-psd/smartphone-mockup_1310-812.jpg?w=1380&t=st=1700646179~exp=1700646779~hmac=735a5566b7e4733b7e9e67b8525967cda85247a7d123f883ee80ae7e1cecd945' },
    { id: 4, name:'Speaker', price: 400.00, image:'https://m.media-amazon.com/images/I/51TMWQbul4L._SX300_SY300_QL70_FMwebp_.jpg'},
    { id: 5, name:'Headphone', price: 80.00, image:'https://m.media-amazon.com/images/I/31QB73-5IEL._SX300_SY300_QL70_FMwebp_.jpg'},
    { id: 6, name:'Phone Cover', price: 20.00, image:'https://media.istockphoto.com/id/1310474222/photo/pile-of-multicolored-plastic-back-covers-for-mobile-phone-choice-of-smart-phone-protector.jpg?s=2048x2048&w=is&k=20&c=KxlpNfi5oSFTEtKIW7fAHjXMkCaqUmes33lmCiVqa7A='}
];


const productList = document.getElementById('product-list');
const cartItems = document.getElementById('cart-items');
let total = 0;

products.forEach((product) => {
    const productElement = document.createElement('div')
    productElement.classList.add('product');
    productElement.innerHTML = `
    <h2>${product.name}</h2>
    <img src="${product.image}" alt="${product.name}">
    <p>$${product.price.toFixed(2)}</p>
    <button onclick="addToCart(${product.id}, '${product.name}', ${product.price})">Add to  Cart</button>
    `;
    productList.appendChild(productElement);
});

function addToCart(id, name, price) {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
    <p>${name}</p>
    <p>$${price.toFixed(2)}</p>
    `;

    cartItems.appendChild(cartItem);

    total += price;
    document.getElementById('total').textContent = total.toFixed(2);
}

function checkout() {
    cartItems.innerHTML = '';
    total = 0;
    document.getElementById('total').textContent = total.toFixed(2);
    alert('Thank you For your purchase');
}






