var fs = require('fs');
var http = require('http');
var path = require('path');
var express = require('express');

var app = express();
app.use(express.static(path.join(__dirname, '/')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/main.html'))
})
app.get('/projects', function(req, res) {
    res.sendFile(path.join(__dirname, '/projects.html'))
})
app.get('/contacts', function(req, res) {
    res.sendFile(path.join(__dirname, '/Contacts.html'))
})
app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname, '/About.html'))
})
app.get('/d54', function(req, res) {
    res.sendFile(path.join(__dirname, '/d54.html'))
})
app.get('/whosthatstand', function(req, res) {
    res.sendFile(path.join(__dirname, '/whosthatstand.html'))
})
app.get('/jpeg-to-json', function(req, res) {
    res.sendFile(path.join(__dirname, '/Jpeg to Json.html'))
})
app.get('/this-website', function(req, res) {
    res.sendFile(path.join(__dirname, '/this_website.html'))
})

app.use(function(req, res, next) {
    res.status(404).sendFile(path.join(__dirname, '/404.html'));
});

app.listen(8080)
console.log('ready')