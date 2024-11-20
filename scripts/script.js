document.querySelector("#signup-form").addEventListener("input",function() {
    const password = document.querySelector("#pwd").value;
    const confirmPassword = document.querySelector("#confirm-pwd").value;
    const errorMessage = document.querySelector("#error-message");

    if (password && confirmPassword && password !==confirmPassword) {
        errorMessage.style.display = "block";
    } else {
        errorMessage.style.display = "none"
    }
});