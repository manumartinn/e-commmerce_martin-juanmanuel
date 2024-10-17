const buttonClear = document.getElementById("buttonClear");

const clearInputText = () => {
    inputSearch.value = "";
    mostrarCards(autos);
};

buttonClear.addEventListener("click", clearInputText);