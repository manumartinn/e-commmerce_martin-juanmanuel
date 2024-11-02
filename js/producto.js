const main = document.querySelector("main");

const element = window.location.search.split("=")[1];

const carFind = cars.find((cars) => cars.id == element);

let labels = `<div class="product-container">
    <div class="product-main">
        <div class="left-section">
            <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${carFind.id}.jpg" alt="Car ${carFind.id}" id="main-image">
        </div>

        <div class="center-section">
            <div class="product-info">
                <h1 class="product-h1">${carFind.model}</h1>
                <h6>${carFind.category}</h2>
                <p class="description">${carFind.description.split(0,40)}...</p>
                <div class="rating">
                    <span>⭐⭐⭐⭐⭐</span> <a href="#">(3)</a>
                </div>
                <p class="original-price">$100.000</p>
                <p class="discounted-price">$${carFind.price} <span class="discount">(5% OFF)</span></p>
                <p class="installments">In 6 installments of $3,799.78</p>
            </div>
        </div>

        <div class="right-section">
            <div class="shipping-info">
                <h3>Free Standard International Shipping.</h3>
                <p>Estimated between Tue, Oct 22 and Wed, Nov 6.</p>
                <p class="bold">${carFind.stock} available</p>
                ${localStorage.getItem("email")
                    ? `<div class="counter-container">
                        <button class="buttonCounter" onclick="decrementCounter()">-</button>
                        <div class="value" id="counterValue">1</div>
                        <button class="buttonCounter" onclick="increaseCounter()">+</button>
                       </div>
                       <div class="buy-container">
                       <button class="btn primary-btn">Buy it now</button>
                       <button class="btn secondary-btn" onclick="addItems()">Add to cart</button>
                       </div>`
                    : `<button class="btn primary-btn" onclick="location.href='../pages/login.html'">Sign in to buy</button>`
                }
            

        </div>
    </div>
</div>`;

main.innerHTML = labels;

//!----------------------------------------------

document.title = `Nike | ${carFind.model}`;

//!----------------------------------------------
let counterValue = document.getElementById("counterValue");

let counter = 1;

function increaseCounter() {
    if (counter < carFind.stock) {
        counter++;
        counterValue.innerText = counter;
    }
}

function decrementCounter() {
    if (counter > 1 && counter <= carFind.stock) {
        counter--;
        counterValue.innerText = counter;
    }
}

function addItems() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const idProduct = Number(window.location.search.split("=")[1]);

    const product = cars.find(item => item.id === idProduct);

    const existingIdProduct = cart.some(item => item.product.id === idProduct);

    if (existingIdProduct) {
        cart = cart.map(item => {
            if (item.product.id === idProduct){
                return {... item, quantity: item.quantity + counter}
            } else {
                return item
            }
        })
    } else {
        // si no existe, lo pushea
        cart.push({product: product, quantity: counter});
    }

    // guardamos el carrito actualizado en el localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // actualizar la cantidad total de productos en el carrito
    let totalQuantity = cart.reduce((acumulado, actual) => acumulado + actual.quantity, 0);
    localStorage.setItem("quantity", totalQuantity);

    const quantityTag = document.querySelector("#quantity");
    quantityTag.innerText = totalQuantity;
}