let form = document.getElementById("sign_up_form")
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let fullnameInput = document.getElementById("name").value.trim();
    let usernameInput = document.getElementById("username").value.trim();
    let ageInput = document.getElementById("age").value.trim();
    let emailInput = document.getElementById("email").value.trim();
    let phoneInput = document.getElementById("phone").value.trim();
    let passwordInput = document.getElementById("password").value;
    let confirmPasswordInput = document.getElementById("confirm_password").value;

    let errorMessage = document.getElementById("error_message");
    errorMessage.textContent = "";

    /* if (fullnameInput && usernameInput && ageInput && emailInput && phoneInput && passwordInput === ""){
        errorMessage.textContent = "All fields are required";
        return;
    }*/

    if (fullnameInput === ""){
        errorMessage.textContent = "Name is required";
        return;
    }
    if (fullnameInput.length < 3){
        errorMessage.textContent = "Name should be at least 3 characters";
        return;
    }

    if (usernameInput === ""){
        errorMessage.textContent = "Username is required";
        return;
    }
    if (usernameInput.length < 3){
        errorMessage.textContent = "Username should be at least 3 characters";
        return;
    }

    if (ageInput === "" || isNaN(ageInput)){
        errorMessage.textContent = "Age is required";
        return;
    }
    if (ageInput < 18){
        errorMessage.textContent = "User must be 18 or above";
        return;
    }

    if (emailInput === ""){
        errorMessage.textContent = "Email is required";
        return;
    }

    if (phoneInput.length < 10 || phoneInput.length > 10){
        errorMessage.textContent = "Phone number should be 10 digits long";
        return;
    }

    if (passwordInput === "" || confirmPasswordInput === ""){
        errorMessage.textContent = "Password fields are required";
        return;
    }
    if (passwordInput.length < 8 || confirmPasswordInput.length < 8){
        errorMessage.textContent = "Password must be at least 8 characters long";
        return;
    }

    if (passwordInput !== confirmPasswordInput){
        errorMessage.textContent = "Passwords do not match";
        return;
    }
})

