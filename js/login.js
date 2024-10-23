const form = document.querySelector("form");
const p = document.querySelector("p");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    let inputEmail = form.elements.email.value;
    let inputPass = form.elements.password.value;
    
    if (user_login.email === inputEmail && user_login.password === inputPass) {
        window.location.href = "./index.html";
        localStorage.setItem("email", inputEmail);
    } else {
        form.style.display = "none";
        p.style.display = "flex"
        p.innerText = "The username and/or password entered is incorrect.";
    };

});