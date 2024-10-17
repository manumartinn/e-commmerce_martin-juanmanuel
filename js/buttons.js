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
});

sportsButton.addEventListener("click", () => {
    filterAutosCategory("Sport");
});

luxuryButton.addEventListener("click", () => {
    filterAutosCategory("Luxury");
});

allCarsButton.addEventListener("click", () => {
    mostrarCards(autos);
});

