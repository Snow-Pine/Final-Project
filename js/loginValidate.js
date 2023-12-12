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
    }
    else {
        $("#usernameErrorMsg").innerHTML = "";
    }
}

function inputValidation (inputField, errorDisplayElement) {
    const value = inputField.value;
    if (value.trim() !== "") {
        errorDisplayElement.innerHTML = "";
    } else {
        errorDisplayElement.innerHTML = "Error: please enter password.";
        inputField.value = "";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const passwordInput = $("#password");
    const passwordErrorDisplay = $("#passwordErrorMsg");

    function overallValidation () {
        emailValidation();
        inputValidation(passwordInput, passwordErrorDisplay);
    }

    $("#submit").addEventListener("click", overallValidation);
    
});




