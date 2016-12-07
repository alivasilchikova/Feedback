var nameForm = document.getElementById("name").value;
var emailForm = document.getElementById("email").value;
var subjectForm = document.getElementById("subject").value;
var messageForm = document.getElementById("message").value;

$.post(
    "server.js",
    {
        "name": nameForm,
        "email": emailForm,
        "subject": subjectForm,
        "message": messageForm
    },
    onAjaxSuccess
);


