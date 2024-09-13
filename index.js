const h1 = document.querySelector("h1");

const section = document.querySelector("section");

h1.innerText = "Productos";

let array = [];

function dinamicCard() {
    for (let i = 1; i < 10; i++){
        array.push(`<div class="card">
                        <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" class="card-img-top" alt="Nike Air Zoom Pegasus 39 Shield">
                        <div class="card-body">
                            <h5 class="card-title">Car ${i}</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipiscing elit donec, eleifend aenean purus dui ornare blandit risus facilisis interdum, cum nostra vulputate sem venenatis felis facilisi.</p>
                            <p class="card-price">$2.100</p>
                            <button type="button" class="btn btn-outline-dark">Buy item</button>
                            <p class="card-text"><small class="text-body-secondary">Last updated 32 mins ago</small></p>
                        </div>
                    </div>`);
    }

    section.innerHTML = array.join().replaceAll(",", ""); //unión del array a string, y se eliminan las comas
}

dinamicCard();

document.addEventListener("DOMContentLoaded", function() {     //espera al evento (es decir, que esté cargada la página) para ejecturarse - función anónima
    const buttons = document.querySelectorAll(".card .btn.btn-outline-dark"); //selección de todos los elementos que cumplan esa condición

    for (let i = 0; i < 10; i++) {      // i = 0, porque sino el primero no se modifica
        buttons[i].innerText = `Ver más - Car ${i + 1}`; // i + 1, porque sino no conincide
    }
});

