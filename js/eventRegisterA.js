var textArea = document.getElementById("uAnswer");
var form = document.getElementById("aForm");

textArea.addEventListener("blur", aHandler);
textArea.addEventListener("keyup", charCounter);
form.addEventListener("submit", aHandler);

