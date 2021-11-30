let express = require('express'),
    path = require('path');
var app = express();
let server = require('http').Server(app);

app.use(express.static(path.join(__dirname)));

// index page
app.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname + "/index.html"));
});

// start the server listening for requests
app.listen(process.env.PORT || 3000,
    () => console.log("Server is running..."));