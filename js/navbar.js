const header = document.querySelector("header");

let nav = [
    { texto: "Home", href: "index.html" },
    { texto: "History", href: "#" },
    { texto: "Pricing", href: "#" },
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
    menu.push(`<li class="nav-item"><a class="nav-link" href="${boton.href}">${boton.texto}</a></li>`);
}

menu.push(`
        </ul>
        <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
`);

header.innerHTML = menu.join('');