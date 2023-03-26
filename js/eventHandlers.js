function validateUType(){
    let isChecked = document.querySelector('input[name="uType"]:checked');

    if(isChecked != null) {
        return true;
    }
    else {
        return "You must choose your User Type.";
    }

}

function validateEmail(obj){
    let regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (obj.length==0){
        return "Please enter your email address.";
    }

    if (regEx.test(obj)){
        return true;
    }
    else {
        return "Your E-mail format is not valid.";
    }
}

function validateUname(obj){
    
    if (obj.length == 0){
        return "Please enter your username."
    }

    let regEx = /^[^\s\W]+$/;
    if (!regEx.test(obj)){
        return "Your Username only includes a-z, A-Z, 0-9 and _.";
    }

    return true;

}

function validatePhoto(obj){
    let regEx = /^[^\n]+.[a-zA-Z]{3,4}$/;

    if (obj.length == 0){
        return "Please upload your photo for the avatar."
    }

	if (regEx.test(obj)) return true;
	else return "Please check the format of the photo you uploaded.";
}

function validatePw(obj){
    let regEx = /^(?=.*?[^a-zA-Z]).*$/;

    if (obj.length == 0){
        return "Please enter your password."
    }

    if (obj.length!==6){
        return "The length of your password should be 6.";
    }

    if (regEx.test(obj)){
        return true;
    }
	else {
        return "Your password should include at least 1 non-letter.";
    }
}

function validateCPw(obj){
    let pwd = document.getElementById("pw");

    if (pwd.value.length===0){
        return "We need your password for confirmation.";
    }

	if (pwd.value === obj) {
		return true;
	}
    else {
        return "Confirm password is different with the password.";
    }
}

function validateTextArea(obj){
    
    if (obj.length===0){
        return "Please enter your question."
    } 

    if (obj.length <= 1500){
        return true;
    }
	else {
        return "should be less than 1500.";
    }
}

////////////////////////////////////////////////////////////

function uTypeHandler(event) {
    
    let err = document.getElementById("uType_err");
    let container = document.getElementById("radio-buttons-wrap");
    let validRes = validateUType();

    if (validRes===true){
        err.classList.add("hidden");
        err.innerHTML = "";
        container.classList.remove("highlight");
    }
    else {
        err.classList.remove("hidden");
        err.innerHTML = "You should select your user type.";
        container.classList.add("highlight");
    }
}

function emailHandler(event){

    let obj = event.target.value;
    let err = document.getElementById("email_err");
    let validRes = validateEmail(obj);

    if (validRes===true){
        err.classList.add("hidden");
        err.innerHTML = "";
        event.target.classList.remove("highlight");
    }
    else {
        err.classList.remove("hidden");
        err.innerHTML = validRes;
        event.target.classList.add("highlight");
    }

}

function unameHandler(event) {
    
    let obj = event.target.value;
    let err = document.getElementById("uname_err");
    let validRes = validateUname(obj);

    if (validRes===true){
        err.classList.add("hidden");
        err.innerHTML = "";
        event.target.classList.remove("highlight");
    }
    else {
        err.classList.remove("hidden");
        err.innerHTML = validRes;
        event.target.classList.add("highlight");
    }

}

function photoHandler(event){

    let obj = event.target.value;
    let err = document.getElementById("photo_err");
    let validRes = validatePhoto(obj);

    if (validRes===true){
        err.classList.add("hidden");
        err.innerHTML = "";
        event.target.classList.remove("highlight");
    }
    else {
        err.classList.remove("hidden");
        err.innerHTML = validRes;
        event.target.classList.add("highlight");
    }

}

function pwHandler(event) {
    
    let obj = event.target.value;
    let err = document.getElementById("pw_err");
    let validRes = validatePw(obj);

    if (validRes===true){
        err.classList.add("hidden");
        err.innerHTML = "";
        event.target.classList.remove("highlight");
    }
    else {
        err.classList.remove("hidden");
        err.innerHTML = validRes;
        event.target.classList.add("highlight");
    }

}

function cPwHandler(event){

    let obj = event.target.value;
    let err = document.getElementById("cPw_err");
    let validRes = validateCPw(obj);

    if (validRes===true){
        err.classList.add("hidden");
        err.innerHTML = "";
        event.target.classList.remove("highlight");
    }
    else {
        err.classList.remove("hidden");
        err.innerHTML = validRes;
        event.target.classList.add("highlight");
    }

}

////////////////////////////////////////////////////////////

function signupHandler(event) {
    
    var email = document.getElementById("email");
    var uname = document.getElementById("uname");
    var photo = document.getElementById("photo");
    var pw = document.getElementById("pw");
    var cPw = document.getElementById("cPw");

	let formIsValid = true;

    let err = document.getElementById("uType_err");
    let container = document.getElementById("radio-buttons-wrap");
    let validRes = validateUType();
    if (validRes===true){
        err.classList.add("hidden");
        err.innerHTML = "";
        container.classList.remove("highlight");
    }
    else {
        err.classList.remove("hidden");
        err.innerHTML = "You should select your user type.";
        container.classList.add("highlight");
        formIsValid = false;
    }

    err = document.getElementById("email_err");
    validRes = validateEmail(email.value);
    if (validRes===true){
        err.classList.add("hidden");
        err.innerHTML = "";
        email.classList.remove("highlight");
    }
    else {
        err.classList.remove("hidden");
        err.innerHTML = validRes;
        email.classList.add("highlight");
        formIsValid = false;
    }

	err = document.getElementById("uname_err");
    validRes = validateUname(uname.value);
	if (validRes===true){
        err.classList.add("hidden");
        err.innerHTML = "";
        uname.classList.remove("highlight");
    }
    else {
        err.classList.remove("hidden");
        err.innerHTML = validRes;
        uname.classList.add("highlight");
        formIsValid = false;
    }

    err = document.getElementById("photo_err");
    validRes = validatePhoto(photo.value);
    if (validRes===true){
        err.classList.add("hidden");
        err.innerHTML = "";
        photo.classList.remove("highlight");
    }
    else {
        err.classList.remove("hidden");
        err.innerHTML = validRes;
        photo.classList.add("highlight");
        formIsValid = false;
    }

    err = document.getElementById("pw_err");
	validRes = validatePw(pw.value);
    if (validRes===true){
        err.classList.add("hidden");
        err.innerHTML = "";
        pw.classList.remove("highlight");
    }
    else {
        err.classList.remove("hidden");
        err.innerHTML = validRes;
        pw.classList.add("highlight");
        formIsValid = false;
    }

    err = document.getElementById("cPw_err");
    validRes = validateCPw(cPw.value);
    if (validRes===true){
        err.classList.add("hidden");
        err.innerHTML = "";
        cPw.classList.remove("highlight");
    }
    else {
        err.classList.remove("hidden");
        err.innerHTML = validRes;
        cPw.classList.add("highlight");
        formIsValid = false;
    }

    if (!formIsValid) {
		event.preventDefault();
	} 

}

function loginHandler(event){
    
	let uname = document.getElementById("uname");
	let pw = document.getElementById("pw");
	let formIsValid = true;

	let err = document.getElementById("uname_err");
    let validRes = validateUname(uname.value);
	if (validRes===true){
        err.classList.add("hidden");
        err.innerHTML = "";
        uname.classList.remove("highlight");
    }
    else {
        err.classList.remove("hidden");
        err.innerHTML = validRes;
        uname.classList.add("highlight");
        formIsValid = false;
    }

    err = document.getElementById("pw_err");
	validRes = validatePw(pw.value);
    if (validRes===true){
        err.classList.add("hidden");
        err.innerHTML = "";
        pw.classList.remove("highlight");
    }
    else {
        err.classList.remove("hidden");
        err.innerHTML = validRes;
        pw.classList.add("highlight");
        formIsValid = false;
    }

    if (!formIsValid) {
		event.preventDefault();
	} 

}

function qHandler(event){

    let formIsValid = true;

    let obj = document.getElementById("uQ");
    let err = document.getElementById("uQ_err");
    let validRes = validateTextArea(obj.value);

    if (validRes===true){
        err.classList.add("hidden");
        err.innerHTML = "";
        obj.classList.remove("highlight");
    }
    else {
        err.classList.remove("hidden");
        err.innerHTML = validRes;
        obj.classList.add("highlight");
        formIsValid = false;
    }

    if (!formIsValid) {
		event.preventDefault();
	}

}

function aHandler(event){
    
    let formIsValid = true;

    let obj = document.getElementById("uAnswer");
    let err = document.getElementById("uA_err");
    let validRes = validateTextArea(obj.value);

    if (validRes===true){
        err.classList.add("hidden");
        err.innerHTML = "";
        obj.classList.remove("highlight");
    }
    else {
        err.classList.remove("hidden");
        err.innerHTML = validRes;
        obj.classList.add("highlight");
        formIsValid = false;
    }

    if (!formIsValid) {
		event.preventDefault();
	}

}

function charCounter(event){
    
    let obj = event.target;
    let err = obj.previousElementSibling;

    let current = obj.value.length;
    let left = 1500 - obj.value.length;

    if (current<=1500){
        err.innerHTML = String(current) + " / 1500 ( Left : " + String(left) + " )";
    }
    else {
        err.innerHTML = String(current) + " / 1500 ( Over : " + -1*String(left) + " )";
    }
}