var express = require('express');
var app = express();

var kue = require('kue')
var queue = kue.createQueue({
    redis : "redis://redis:6379/0"
    /*
    redis: {
        host: "redis",
        db: 0
    }
    */
});

app.get('/', function(req, res) {
    queue.create('hello', {
        'who': 'world',
        'what': 'hi there'
    }).save();
    res.send('Hello, World');
});

app.listen(3000, function() {
    console.log('Server listening on 3000')
});
