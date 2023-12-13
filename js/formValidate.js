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
        return 1;
    }
    else {
        $("#emailError").innerHTML = "";
        return 0;
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
        return 1;
    }
    else {
        $("#emailConfirmErrorMsg").innerHTML = "";
        return 0;
    }
}

function inputValidation (inputField, errorDisplayElement) {
    const value = inputField.value;
    if (value.trim() !== "") {
        errorDisplayElement.innerHTML = "";
        return 0;
    } else {
        errorDisplayElement.innerHTML = "Error: Information required.";
        inputField.value = "";
        return 1;
    }
}

function numInputValidation (inputField, errorDisplayElement) {
    const value = inputField.value;
    if (value.trim() === "" || isNaN(value)){
        errorDisplayElement.innerHTML = "Error: Information must be numeric.";
        inputField.value = "";
        return 1;
    } else {
        errorDisplayElement.innerHTML = "";
        return 0;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    $("#email").focus();

    const fnameInput = $("#fname");
    const lnameInput = $("#lname");
    const phoneInput = $("#phoneNum");
    const passwdInput = $("#password");

    const fnameErrorDisplay = $("#fnameErrorMsg");
    const lnameErrorDisplay = $("#lnameErrorMsg");
    const phoneErrorDisplay = $("#numErrorMsg");
    const passwdErrorDisplay = $("#passwdErrorMsg");


    function overallValidation () {
        emailValidation();
        emailConfirmation();
        inputValidation(passwdInput, passwdErrorDisplay);
        inputValidation(fnameInput, fnameErrorDisplay);
        inputValidation(lnameInput, lnameErrorDisplay);
        numInputValidation(phoneInput, phoneErrorDisplay);


        let val1 = emailValidation();
        let val2 = emailConfirmation();
        let val3 = inputValidation(fnameInput, fnameErrorDisplay);
        let val4 = inputValidation(lnameInput, lnameErrorDisplay);
        let val5 = numInputValidation(phoneInput, phoneErrorDisplay);
        let val6 = inputValidation(passwdInput, passwdErrorDisplay);

        if (val1 != 1 && val2 != 1 && val3 != 1 && val4 != 1 && val5 != 1 && val6 != 1) {
            alert("Submission successful! Please check your mailbox for verification.");
        } else {
            alert("Please make sure your data are input correctly.");
        }
    }

    $("#submit").addEventListener("click", overallValidation);
    
});




