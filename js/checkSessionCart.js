const checkSessionCart = () => {
    if(localStorage.getItem("email")){

    } else{
        location.href = "./index.html";
    }
}

checkSessionCart();