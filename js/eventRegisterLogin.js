var uname = document.getElementById("uname");
var pw = document.getElementById("pw");
var form = document.getElementById("loginForm");

uname.addEventListener("blur", unameHandler);
pw.addEventListener("blur", pwHandler);
form.addEventListener("submit", loginHandler)