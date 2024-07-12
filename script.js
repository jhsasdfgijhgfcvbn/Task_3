function resetForm() {
    document.FormFill.username.value = "";
    document.FormFill.email.value = "";
    document.FormFill.password.value = "";
    document.FormFill.cPassword.value = "";
    clearErrors();
}

function clearErrors() {
    document.getElementById("res1").innerHTML = "";
    document.getElementById("res2").innerHTML = "";
    document.getElementById("res3").innerHTML = "";
    document.getElementById("res4").innerHTML = "";
    document.getElementById("res5").innerHTML = "";
}

function validateField(event) {
    const fieldName = event.target.name;
    let errorMsg = "";

    switch (fieldName) {
        case "username":
            if (event.target.value == "") {
                errorMsg = "Enter Username";
            } else if (event.target.value.length < 6) {
                errorMsg = "Username must be at least 6 characters";
            }
            document.getElementById("res1").innerHTML = errorMsg;
            break;
        case "email":
            var e=FormFill.email.value;
			var e1=e.indexOf("@");
			var dot=e.indexOf(".");
            if(e1<1||dot<e1+2||(dot+2)>e.length){
				errorMsg="invalid email";
			}

            if (event.target.value == "") {
                errorMsg = "Enter Email";
            }
            document.getElementById("res2").innerHTML = errorMsg;
            break;
        case "password":
            if (event.target.value == "") {
                errorMsg = "Enter Password";
            } else if (event.target.value.length < 6) {
                errorMsg = "Password must be at least 6 characters";
            }
            document.getElementById("res3").innerHTML = errorMsg;
            break;
        case "cPassword":
            if (event.target.value == "") {
                errorMsg = "Enter Confirm Password";
            } else if (event.target.value !== document.FormFill.password.value) {
                errorMsg = "Passwords don't match";
            }
            document.getElementById("res4").innerHTML = errorMsg;
            break;
    }
}

function addInputEventListeners() {
    document.FormFill.username.addEventListener("input", validateField);
    document.FormFill.email.addEventListener("input", validateField);
    document.FormFill.password.addEventListener("input", validateField);
    document.FormFill.cPassword.addEventListener("input", validateField);
}

function validation() {
    clearErrors();

    if (document.FormFill.username.value == "") {
        document.getElementById("res1").innerHTML = "Enter Username";
        return false;
    } else if (document.FormFill.username.value.length < 6) {
        document.getElementById("res1").innerHTML = "Username must be at least 6 characters";
        return false;
    } else if (document.FormFill.email.value == "") {
        document.getElementById("res2").innerHTML = "Enter Email";
        return false;
    } else if (document.FormFill.password.value == "") {
        document.getElementById("res3").innerHTML = "Enter Password";
        return false;
    } else if (document.FormFill.password.value.length < 6) {
        document.getElementById("res3").innerHTML = "Password must be at least 6 characters";
        return false;
    } else if (document.FormFill.cPassword.value == "") {
        document.getElementById("res4").innerHTML = "Enter Confirm Password";
        return false;
    } else if (document.FormFill.cPassword.value !== document.FormFill.password.value) {
        document.getElementById("res5").innerHTML = "Passwords don't match";
        return false;
    } else if (document.FormFill.password.value == document.FormFill.cPassword.value) {
        Swal.fire({
            title: "Good job!",
            text: `You have signed up correctly!`,
            icon: "success"
        }).then(() => {
            resetForm();
        });
        return false;
    }
}

function togglePassword(fieldId) {
    const field = document.getElementById(fieldId);
    if (field.type === "password") {
        field.type = "text";
        toggleIcon.classList.remove('bxs-show');
        toggleIcon.classList.add('bxs-hide');
    } else {
        field.type = "password";
        toggleIcon.classList.remove('bxs-hide');
        toggleIcon.classList.add('bxs-show');
    }
}

// Add event listeners to input fields when the DOM content is loaded
document.addEventListener("DOMContentLoaded", addInputEventListeners);
