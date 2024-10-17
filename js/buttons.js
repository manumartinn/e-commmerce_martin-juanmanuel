const classicButton = document.querySelector("#buttoncardsClassic");
const sportsButton = document.querySelector("#buttoncardsSports");
const luxuryButton = document.querySelector("#buttoncardsLuxury");
const allCarsButton = document.querySelector("#buttonviewAllCars");

const filterAutosCategory = (category) => {
    const autosFiltrados = autos.filter(auto => auto.categoria === category);
    mostrarCards(autosFiltrados);
};

classicButton.addEventListener("click", () => {
    filterAutosCategory("Classic");
    h1.innerText = "Classic";
});

sportsButton.addEventListener("click", () => {
    filterAutosCategory("Sport");
    h1.innerText = "Sport";
});

luxuryButton.addEventListener("click", () => {
    filterAutosCategory("Luxury");
    h1.innerText = "Luxury";
});

allCarsButton.addEventListener("click", () => {
    mostrarCards(autos);
    h1.innerText = "Productos";
});

