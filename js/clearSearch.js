const buttonClear = document.getElementById("buttonClear");

const clearInputText = () => {
    buttonClear.style.display = "none";
    inputSearch.value = "";
    h1.innerText = "Products";
    showCards(cars);
};

buttonClear.addEventListener("click", clearInputText);

//!-----------------------------------------------------------------

const charSearch = () => {
    const char = inputSearch.value.length;

    if (char >= 1){
        buttonClear.style.display = "block";
    }
    else{
        buttonClear.style.display = "none";
    }
}

inputSearch.addEventListener("input", charSearch);