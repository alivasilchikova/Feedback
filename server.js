var server = require('diet');
var app = server();
app.listen('http://localhost:63342');

app.post('/', function($){
    var feedBack = {
        name: $.body.name,
        email: $.body.email,
        subject: $.body.subject,
        message: $.body.message
    }
})

