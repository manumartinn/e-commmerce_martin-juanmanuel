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
                            <button type="button" class="btn btn-outline-dark custom-btn-white"><a class="button-link" href="producto.html">See more</a></button>
                            <p class="card-text"><small class="text-body-secondary">Last updated 32 mins ago</small></p>
                        </div>
                    </div>`);
    }

    section.innerHTML = array.join().replaceAll(",", ""); //unión del array a string, y se eliminan las comas
}

dinamicCard();
