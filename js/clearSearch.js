const buttonClear = document.getElementById("buttonClear");

const clearInputText = () => {
    inputSearch.value = "";
    mostrarCards(autos);
    h1.innerText = "Productos";
};

buttonClear.addEventListener("click", clearInputText);