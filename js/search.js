const inputSearch = document.getElementById("inputSearch");
const buttonSearch = document.getElementById("buttonSearch");

const filterCars = () => {
    const filtered = cars.filter(car => car.model.toLowerCase().startsWith(inputSearch.value.toLowerCase()));
    
    if (filtered.length == 1) {
        showCards(filtered);
    } else if (filtered.length > 1) {
        showCards(filtered);
    } else {
        h1.innerText = "Car not found. Please try a different search.";
    }
};

buttonSearch.addEventListener("click", filterCars);


