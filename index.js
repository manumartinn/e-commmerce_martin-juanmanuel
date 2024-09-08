const h1 = document.querySelector(".body-title");

h1.innerText = "Productos";

const array = [];

for (i = 1; i < 9; i++){

    // array.push(`<img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg"`);

    array.push(`<div class="card">
                    <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" class="card-img-top" alt="Nike Air Zoom Pegasus 39 Shield">
                    <div class="card-body">
                        <h5 class="card-title">Nike Air Zoom Pegasus 39 Shield</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipiscing elit donec, eleifend aenean purus dui ornare blandit risus facilisis interdum, cum nostra vulputate sem venenatis felis facilisi.</p>
                        <p class="card-price">$2.100</p>
                        <button type="button" class="btn btn-outline-dark">Buy item</button>
                        <p class="card-text"><small class="text-body-secondary">Last updated 32 mins ago</small></p>
                    </div>
                </div>`)

    document.querySelector(".card-group").innerHTML = (array);
}