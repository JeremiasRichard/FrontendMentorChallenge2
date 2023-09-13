document.addEventListener("DOMContentLoaded", function ()
{
    const emailInput = document.getElementById("emailId");
    const validarButton = document.getElementById("validate");
    const errorMessage = document.getElementById("error-message");
    const errorIcon = document.getElementById("error-icon");

    validarButton.addEventListener("click", function () {
        const email = emailInput.value.trim();

        if (isValidEmail(email)) {
            errorMessage.textContent = "";
        } else {
            errorMessage.textContent = "Please provide a valid email";
            errorIcon.style.display = "block";
        }
    });

    function isValidEmail(email) {
        const emailRegex = /@.*\.com/;
        return emailRegex.test(email);
    }
});
