const myPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Data loaded")}, 3000)
});

myPromise
    .then(result => {
        document.querySelector(".loader").style.display = "none";
        document.querySelector(".container").style.display = "flex";
        footerAll = document.querySelector(".footerAll");
        footerAll.style.position = "relative";
        footerAll.style.bottom = "0";
    })
    .catch(error => {console.error("Error loading data", error);})

const h1 = document.querySelector("h1");

h1.innerText = "Products";

const section = document.querySelector("section");

const showCards = (cars) => {
    const cards = cars.map((car) =>
        `<div class="card"> 
            <div class="card-img-wrapper"> 
                <div class="card-img"> 
                    <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${car.id}.jpg" class="card-img-top" alt="Nike Air Zoom Pegasus 39 Shield">
                </div>
            </div>
            <div class="card-body">
                <h5 class="card-title">${car.model}</h5>
                <h6>${car.category}</h6>
                <p class="card-text">${car.description.split(0,40)}...</p>
                <p class="card-price">$${car.price}</p>
                <p>Stock: ${car.stock}</p>
                <a class="button-link" href="../pages/producto.html?prod=${car.id}"><button type="button" class="btn btn-outline-dark custom-btn-white"><span class="material-symbols-outlined">add</span>See more</button></a>
                <p class="card-text"><small class="text-body-secondary">Last updated ${car.update} mins ago</small></p>
            </div>
        </div>`);

    section.innerHTML = cards.join("");
}

showCards(cars);

