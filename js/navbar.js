const header = document.querySelector("header");

let nav = [
    { texto: "Home", function: "home" },
    { texto: "Classic", function: "cardsClassic" },
    { texto: "Sports", function: "cardsSports" },
    { texto: "Luxury", function: "cardsLuxury" },
    { texto: "View all cars", function: "viewAllCars" },
];

let menu = [];

menu.push(`
  <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <div class="container-fluid">
      <img class="navbar-brand" src="https://jobs.nike.com/media/images/logo-nike-WHT.original.png" alt="Logo Nike">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
`);

for (let boton of nav) {
    menu.push(`<li class="nav-item"><a class="nav-link" id="button${boton.function}" href="#">${boton.texto}</a></li>`);
}

menu.push(`
        </ul>
        <div class="d-flex">
            <input class="form-control me-2" placeholder="Find what you need..." id="inputSearch">
            <button class="btn btn-outline-success" id="buttonSearch">Search</button>
            <button class="btn btn-outline-danger" id="buttonClear">Clear</button>
        </div>
      </div>
    </div>
  </nav>
`);

header.innerHTML = menu.join('');

//!------------------------------------------------------------------------------------

const homeButton = document.querySelector("#buttonhome");

homeButton.addEventListener("click", () => {
    window.location.href = "index.html";
});