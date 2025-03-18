
// const age = 10;

// localStorage.setItem('myAge', age);//local storage data put like sting
// console.log(localStorage.getItem('myAge'));//your data how to store
// localStorage.removeItem('myAge');
// localStorage.setItem('myAge', age)



// const handleStore = () => {
//     const person = {
//         name: 'ashik',
//         age: 20,
//         friend:['joy','roy']
//     }
//     const converted = JSON.stringify(person)
//     localStorage.setItem('myDetails', converted);

// }

// const myData = localStorage.getItem('myDetails');
// const convertedData = JSON.parse(myData)
// console.log(convertedData.friend[1]);



// const handleStore1 = () => {
//     const company = {
//         name: 'Bangladesh agency',
//         since: 1991,
//         employer: ['nill', 'joy', 'roy'],
//         detail: {
//             brand: 'like'
//         },
//         salary: [10, 20, 30, 40]
//     }
//     const myDataAll = JSON.stringify(company);
//     localStorage.setItem('myInfo',myDataAll)
// };

// const allData = localStorage.getItem('myInfo');
// const allInfo = JSON.parse(allData);
// console.log(allInfo.salary[2]);



// card add product

const addCart = () => {
    const productName = document.getElementById('productName');
    const productQuantity = document.getElementById('productQuantity');

    const name = productName.value.trim();
    const quantity = productQuantity.value.trim();

    if (!name || !quantity) {
        alert("Please enter both product name and quantity.");
        return;
    }

    saveLocalStorage(name, quantity);
    displayData(name, quantity);

    productName.value = '';
    productQuantity.value = '';
};

const getProductsFromLocalStorage = () => {
    let cart = {};
    const data = localStorage.getItem('cart');
    if (data) {
        cart = JSON.parse(data);
    }
    return cart;
};

const saveLocalStorage = (product, quantity) => {
    const cart = getProductsFromLocalStorage();

    // Update or add new product
    cart[product] = quantity;

    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
};

const displayData = (name, quantity) => {
    const container = document.getElementById('addCart');
    const li = document.createElement('li');
    li.innerText = `${name} : ${quantity}`;
    container.append(li);
};

// Load products from localStorage on page load
const loadCart = () => {
    const cart = getProductsFromLocalStorage();
    for (const product in cart) {
        displayData(product, cart[product]);
    }
};

// Run loadCart when the page loads
window.onload = loadCart;
