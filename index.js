var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var host = "192.168.1.100";
var port = "80";

http.listen(port, host, function() {
    console.log('listening on *:80');
});


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/style.css', function(req, res) {
    res.sendFile(__dirname + '/style.css');
});
app.get('/normalize.css', function(req, res) {
    res.sendFile(__dirname + '/normalize.css');
});


app.get('/sitelogo', function(req, res) {
    res.sendFile(__dirname + '/Content/SiteLogo.png');
});
app.get('/ytlogo', function(req, res) {
    res.sendFile(__dirname + '/Content/YoutubeLogo.png');
});
app.get('/fblogo', function(req, res) {
    res.sendFile(__dirname + '/Content/FacebookLogo.png');
});
app.get('/instalogo', function(req, res) {
    res.sendFile(__dirname + '/Content/InstagramLogo.png');
});
app.get('/twlogo', function(req, res) {
    res.sendFile(__dirname + '/Content/TwitterLogo.png');
});



io.on('connection', function(socket) {
    console.log(zaman() + ' : a user connected');

    socket.on('disconnect', function() {
        console.log(zaman() + ' : user disconnected');
    });

});

function zaman() {

    var currentdate = new Date();
    var datetime = currentdate.getDate() + "/" +
        (currentdate.getMonth() + 1) + "/" +
        currentdate.getFullYear() + " @ " +
        currentdate.getHours() + ":" +
        currentdate.getMinutes() + ":" +
        currentdate.getSeconds();

    return datetime;
}