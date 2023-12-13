"use strict"

function $(selector){
    return document.querySelector(selector);
}

function emailValidation () {
    const emailInput = $("#username").value;
    const emailPattern = emailInput.trim();
    var validRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.match(validRegex)) {
        $("#usernameErrorMsg").innerHTML = "Error: Must be a valid email address.";
        $("#username").value = "";
        return 1;
    }
    else {
        $("#usernameErrorMsg").innerHTML = "";
        return 0;
    }
}

function inputValidation (inputField, errorDisplayElement) {
    const value = inputField.value;
    if (value.trim() !== "") {
        errorDisplayElement.innerHTML = "";
        return 0;
    } else {
        errorDisplayElement.innerHTML = "Error: please enter password.";
        inputField.value = "";
        return 1;
    }
}

function Redirect() {
    window.location.href = "../index.html";
    alert("Login successful, Welcome back!");
}

document.addEventListener("DOMContentLoaded", () => {
    const passwordInput = $("#password");
    const passwordErrorDisplay = $("#passwordErrorMsg");

    function overallValidation () {
        emailValidation();
        inputValidation(passwordInput, passwordErrorDisplay);

        let val1 = emailValidation();
        let val2 = inputValidation(passwordInput, passwordErrorDisplay);

        if (val1 != 1 && val2 != 1) {
            Redirect();
        } else {
            alert("Please check your input again.");
        }
    }

    $("#login").addEventListener("click", overallValidation);
    
});




