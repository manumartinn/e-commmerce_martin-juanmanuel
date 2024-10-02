const h1 = document.querySelector("h1");

const section = document.querySelector("section");

h1.innerText = "Productos";

const cards = autos.map((auto) =>
                    `<div class="card"> 
                        <img src="${auto.url}" class="card-img-top" alt="Nike Air Zoom Pegasus 39 Shield">
                        <div class="card-body">
                            <h5 class="card-title">${auto.modelo}</h5>
                            <p class="card-text">${auto.descripcion}</p>
                            <p class="card-price">$${auto.precio}</p>
                            <button type="button" class="btn btn-outline-dark custom-btn-white"><a class="button-link" href="../pages/producto.html?prod=${auto.id}">See more</a></button>
                            <p class="card-text"><small class="text-body-secondary">Last updated ${auto.update} mins ago</small></p>
                        </div>
                    </div>`);

section.innerHTML = cards.join().replaceAll(",", "");