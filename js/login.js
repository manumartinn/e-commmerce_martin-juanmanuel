const form = document.querySelector("form");
const p = document.querySelector("p");

const handleSubmitLogin = ev => {
    ev.preventDefault();
        
    let inputEmail = form.elements.email.value;
    let inputPass = form.elements.password.value;
        
    if (user_login.email === inputEmail && user_login.password === inputPass) {
        localStorage.setItem("email", inputEmail);
        window.location.href = "./index.html";
    } else {
        form.style.display = "none";
        p.style.display = "flex"
        p.innerText = "The username and/or password entered is incorrect.";
    };
};

form.addEventListener("submit", handleSubmitLogin);
