function Password() {
    var inputRef = document.getElementById("input");
    var buttonRef = document.querySelector(".sure");
    if(inputRef.type == "password"){
    inputRef.type = "text";
    buttonRef.innerText = "Hide Password";
    }
    else {
    inputRef.type = "password";
    buttonRef.innerText = "Show Password";
    }
}