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
            <button class="btn btn-outline-success" id="buttonSearch"><span class="material-symbols-outlined">search</span>Search</button>
            <button class="btn btn-outline-danger" id="buttonClear"><span class="material-symbols-outlined">delete</span>Clear</button>
            <div class="navbar-nav d-flex">
          ${localStorage.getItem("email")
            ? `<p class="helloUser">Hi, ${localStorage.getItem('email')}</p><span style="color: white; margin-left: 10px; margin-right: 10px;">|</span><a href="cart.html" style="color: white; text-decoration: none;">
            <svg xmlns="http://www.w3.org/2000/svg" style="margin-right: 10px;" width="16" height="16" fill="white" class="bi bi-cart" alt="Comprar" viewBox="0 0 16 16"><path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/></svg>
            <b style="color: white; text-decoration: none;" id="quantity">${localStorage.getItem('quantity')}</b></a><span style="color: white; margin-left: 10px; margin-right: 10px;">|</span><p onclick="closeSession()" class="closeSession">Log out</p>`
            : `<button class="btn btn-outline-primary signin-btn" onclick="location.href='../pages/login.html'"><span class="material-symbols-outlined">person</span>Login</button>`
          }
          </div>
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