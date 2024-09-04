var express = require('express')
var cors = require('cors')
var app = express()

app.use(express.static('views', {
    setHeaders: function (res, path) {
        res.set("tel-pqr", "test");
    }
}))

var corsOptions = {
    origin: 'http://localhost:8001',
    allowedHeaders: "*",
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// Too enable cors across the board
app.options('*', cors(corsOptions)) // include before other routes

// app.options('/products/:id', cors()) // enable pre-flight request for DELETE request
app.get('/products/:id', cors(), function (req, res, next) {
    res.set('tel-pqr', 'test');
    res.json({ msg: 'This is CORS-enabled GET for all origins!' })
})
app.delete('/products/:id', cors(), function (req, res, next) {
    res.set('tel-pqr', 'test');
    res.json({ msg: 'This is CORS-enabled DELETE for all origins!' })
})

app.listen(8001, function () {
    console.log('CORS-enabled web server listening on port 8001')
})
