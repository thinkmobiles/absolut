var express = require('express');
var fs = require('fs');
var http = require('http');

var router = express.Router({
    caseSensitive: true,
    strict: true
});

var requestCount = 0;

var app = express();

var httpServer = http.createServer(app);


app.set('port', 8787);

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));

app.use(express.static(__dirname));

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('access-control-allow-credentials', true);
    next();
});
function allowCrossDomain(req, res, next) {
    var browser = req.headers['user-agent'];
    console.log("Browser: " + browser);
    if (/Trident/.test(browser))
        res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    next();
}
app.use(allowCrossDomain);

app.get('/', function (req, res, next) {
    res.sendfile('templates/index.html');
});

httpServer.listen(app.get('port'), function () {
    console.log( "Express server listening on port " + app.get( 'port' ) );
});
