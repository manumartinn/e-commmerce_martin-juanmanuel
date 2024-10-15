const inputSearch = document.getElementById("inputSearch");
const buttonSearch = document.getElementById("buttonSearch");

const filterAutos = () => {
    const filtered = autos.filter(auto => auto.modelo.toLowerCase() === inputSearch.value.toLowerCase());
    
    if (filtered.length == 1) {
        const filterData = filtered[0].modelo;

        const cardsFiltered = filtered.map((auto) =>
            `<div class="card"> 
                <div class="card-img"> 
                    <img src="${auto.url}" class="card-img-top" alt="Nike Air Zoom Pegasus 39 Shield">
                </div>
                <div class="card-body">
                    <h5 class="card-title">${auto.modelo}</h5>
                    <p class="card-text">${auto.descripcion.split(0,40)}...</p>
                    <p class="card-price">$${auto.precio}</p>
                    <button type="button" class="btn btn-outline-dark custom-btn-white"><a class="button-link" href="../pages/producto.html?prod=${auto.id}">See more</a></button>
                    <p class="card-text"><small class="text-body-secondary">Last updated ${auto.update} mins ago</small></p>
                </div>
            </div>`);
            section.innerHTML = cardsFiltered;

        } else {
           alert("Car not found. Please try a different search.");
        }
    };
    
buttonSearch.addEventListener("click", filterAutos);

