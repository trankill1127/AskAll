var uType_public = document.getElementById("public");
var uType_tech = document.getElementById("tech");
var email = document.getElementById("email");
var uname = document.getElementById("uname");
var photo = document.getElementById("photo");
var pw = document.getElementById("pw");
var cPw = document.getElementById("cPw");
var form = document.getElementById("signupForm");

uType_public.addEventListener("blur", uTypeHandler);
uType_tech.addEventListener("blur", uTypeHandler);
email.addEventListener("blur", emailHandler);
uname.addEventListener("blur", unameHandler);
photo.addEventListener("blur", photoHandler);
pw.addEventListener("blur", pwHandler);
cPw.addEventListener("blur", cPwHandler);
form.addEventListener("submit", signupHandler);