const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');

function checkPasswordsMatch(){
    confirmPassword.setCustomValidity(
    confirmPassword.value === password.value 
    ? ""
    : "Passwords do not match."
    );
}

password.addEventListener("input", checkPasswordsMatch);
confirmPassword.addEventListener("input", checkPasswordsMatch);