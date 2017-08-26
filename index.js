var mongoose = require('mongoose')
var Operaciones = require('./crud.js')
mongoose.Promise = require('bluebird');
var url = "mongodb://localhost/nodeDriver"

mongoose.connect(url)
Operaciones.consultarYActualizar((error, result) => {
    if (error) console.log(error)
    console.log(result)
})
