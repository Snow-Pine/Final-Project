"use strict"

function $(selector){
    return document.querySelector(selector);
}

function emailValidation () {
    const emailInput = $("#email").value;
    const emailPattern = emailInput.trim();
    var validRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.match(validRegex)) {
        $("#emailError").innerHTML = "Error: Must be a valid email address.";
        $("#email").value = "";
    }
    else {
        $("#emailError").innerHTML = "";
    }
}

function emailConfirmation () {
    const emailInput = $("#email").value;
    const emailReInput = $("#emailConfirm").value;
    const emailInputPattern = emailInput.trim();
    const emailReInputPattern = emailReInput.trim();
    var validRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailReInputPattern.match(validRegex) || emailReInputPattern != emailInputPattern) {
        $("#emailConfirmErrorMsg").innerHTML = "Error: Email address must be same.";
        $("#emailConfirm").value = "";
    }
    else {
        $("#emailConfirmErrorMsg").innerHTML = "";
    }
}

function inputValidation (inputField, errorDisplayElement) {
    const value = inputField.value;
    if (value.trim() !== "") {
        errorDisplayElement.innerHTML = "";
    } else {
        errorDisplayElement.innerHTML = "Error: Information required.";
        inputField.value = "";
    }
}

function numInputValidation (inputField, errorDisplayElement) {
    const value = inputField.value;
    if (value.trim() === "" || isNaN(value)){
        errorDisplayElement.innerHTML = "Error: Information must be numeric.";
        inputField.value = "";
    } else {
        errorDisplayElement.innerHTML = "";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    $("#email").focus();

    const fnameInput = $("#fname");
    const lnameInput = $("#lname");
    const phoneInput = $("#phoneNum");

    const fnameErrorDisplay = $("#fnameErrorMsg");
    const lnameErrorDisplay = $("#lnameErrorMsg");
    const phoneErrorDisplay = $("#numErrorMsg");

    function overallValidation () {
        emailValidation();
        emailConfirmation();
        inputValidation(fnameInput, fnameErrorDisplay);
        inputValidation(lnameInput, lnameErrorDisplay);
        numInputValidation(phoneInput, phoneErrorDisplay);
    }

    $("#submit").addEventListener("click", overallValidation);
    
});




