class Productos{
    constructor(titulo, detalle, precio, precioDes, stock, imagen){
        this.titulo = titulo;
        this.detalle = detalle;
        this.precio = precio;
        this.precioDes = precioDes;
        this.stock = stock;
        this.imagen = imagen;
    }
}

const car = new Productos("Car 1", "Toyota Corolla", "$50.000", "$25.000", 25, "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/1.jpg");

const main = document.querySelector("main");

let etiquetas = `<div class="producto-container">
    <div class="producto-main">
        <div class="left-section">
            <img src="${car.imagen}" alt="Zenbook Pro 14" id="main-image">
        </div>

        <div class="center-section">
            <div class="product-info">
                <h1 class="producto-h1">${car.titulo}</h1>
                <p class="description">${car.detalle}</p>
                <div class="rating">
                    <span>⭐⭐⭐⭐⭐</span> <a href="#">(3)</a>
                </div>
                <p class="original-price">${car.precio}</p>
                <p class="discounted-price">${car.precioDes} <span class="discount">(5% OFF)</span></p>
                <p class="installments">In 6 installments of $673,799.78</p>
            </div>
        </div>

        <div class="right-section">
            <div class="shipping-info">
                <h3>Free Standard International Shipping.</h3>
                <p>Estimated between Tue, Oct 22 and Wed, Nov 6.</p>
                <p class="bold">${car.stock} available</p>
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

main.innerHTML = etiquetas;