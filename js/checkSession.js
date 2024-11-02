const checkSession = () => {
    if (localStorage.getItem("email")){
        location.href = "./index.html";
    };
}

checkSession();




