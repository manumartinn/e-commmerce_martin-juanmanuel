const inputSearch = document.getElementById("inputSearch");
const buttonSearch = document.getElementById("buttonSearch");

const filterAutos = () => {
    const filtered = autos.filter(auto => auto.modelo.toLowerCase() === inputSearch.value.toLowerCase());
    
    if (filtered.length == 1) {
        mostrarCards(filtered);
        } else {
            h1.innerText = "Car not found. Please try a different search.";
        }
    };
    
buttonSearch.addEventListener("click", filterAutos);

