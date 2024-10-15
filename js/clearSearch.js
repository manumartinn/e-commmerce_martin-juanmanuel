const buttonClear = document.getElementById("buttonClear");

const clearInputText = () => {
    inputSearch.value = "";
    section.innerHTML = cards.join().replaceAll(",", "");
};

buttonClear.addEventListener("click", clearInputText);