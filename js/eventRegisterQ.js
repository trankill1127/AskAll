var textArea = document.getElementById("uQ");
var form = document.getElementById("qForm");

textArea.addEventListener("blur", qHandler);
textArea.addEventListener("keyup", charCounter);
form.addEventListener("submit", qHandler);

