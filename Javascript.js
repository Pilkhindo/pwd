var $form = document.querySelector("form");
var $error = document.querySelector(".error");
var $inputFields = document.querySelectorAll(".input-field");
var $email = document.getElementById("username");
var $password = document.getElementById("password");

function addError(message) {
    $error.innerText = message;
    $error.style.display = "block";
}

function removeError() {
    $error.innerText = "";
    $error.style.display = "hidden";
}

function validate (event) {
    event.preventDefault();
    $error.style.display = "none";

    
if ($email.value !== 'admin' || $password.value !== 'aku') {
    addError("Email atau password salah");
} else {
    removeError();
    alert("Login berhasil!");
    location.href ="Portal.html";
}
}

$form.addEventListener("submit", validate);