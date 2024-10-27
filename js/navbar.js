const header = document.querySelector("header");

let nav = [
    { text: "Home", function: "home" },
    { text: "Classic", function: "cardsClassic" },
    { text: "Sports", function: "cardsSports" },
    { text: "Luxury", function: "cardsLuxury" },
    { text: "View all cars", function: "viewAllCars" },
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
    menu.push(`<li class="nav-item"><a class="nav-link" id="button${boton.function}" href="#">${boton.text}</a></li>`);
}

menu.push(`
        </ul>
        <div class="d-flex" style="margin-left: 2%">
            <input class="form-control me-2" placeholder="Find what you need..." id="inputSearch">
            <button class="btn btn-outline-success" id="buttonSearch">Search</button>
            <button class="btn btn-outline-danger" id="buttonClear">Clear</button>
            <ul class="navbar-nav d-flex">
          ${localStorage.getItem("email")
            ? `<p class="helloUser">Hola, ${localStorage.getItem("email")}</p><span style="color: white; margin-left: 10px; margin-right: 10px;">|</span><p onclick="closeSession()" class="closeSession">Cerrar sesion</p>`
            : `<span>a</span><button class="btn btn-outline-primary signin-btn" onclick="location.href='../pages/login.html'">Iniciar sesion</button>`
          }
          </ul>
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

//!------------------------------------------------------------------------------------

function closeSession(){
  localStorage.clear();
  location.href = "../pages/index.html";
}