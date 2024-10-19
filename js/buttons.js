const classicButton = document.querySelector("#buttoncardsClassic");
const sportsButton = document.querySelector("#buttoncardsSports");
const luxuryButton = document.querySelector("#buttoncardsLuxury");
const allCarsButton = document.querySelector("#buttonviewAllCars");

const filterCarsCategory = (category) => {
    const filteredCars = cars.filter(car => car.category === category);
    showCards(filteredCars);
};

classicButton.addEventListener("click", () => {
    filterCarsCategory("Classic");
    h1.innerText = "Classic";
});

sportsButton.addEventListener("click", () => {
    filterCarsCategory("Sport");
    h1.innerText = "Sport";
});

luxuryButton.addEventListener("click", () => {
    filterCarsCategory("Luxury");
    h1.innerText = "Luxury";
});

allCarsButton.addEventListener("click", () => {
    showCards(cars);
    h1.innerText = "Products";
});

