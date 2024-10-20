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
                <div class="quantity-selector">
                    <label for="quantity" class="quantity-label">Quantity:</label>
                    <select id="quantity" class="quantity-dropdown">
                        <option value="1">1 unit</option>
                        <option value="2">2 units</option>
                        <option value="3">3 units</option>
                        <option value="4">4 units</option>
                        <option value="5">5 units</option>
                        <option value="6">6 units</option>
                    </select>
                </div>
            <button class="btn primary-btn">Buy it now</button>
            <button class="btn secondary-btn">Add to cart</button>
        </div>
    </div>
</div>`;

main.innerHTML = labels;

//!----------------------------------------------

document.title = `Nike | ${carFind.model}`;