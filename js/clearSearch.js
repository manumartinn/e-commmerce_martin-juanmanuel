const buttonClear = document.getElementById("buttonClear");

const clearInputText = () => {
    inputSearch.value = "";
    showCards(cars);
    h1.innerText = "Products";
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