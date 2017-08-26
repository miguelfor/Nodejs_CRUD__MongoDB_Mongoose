var MongoClient = require('mongodb').MongoClient

var url = "mongodb://localhost/nodeDriver"

var Operaciones = require('./crud.js')

MongoClient.connect(url, function(err, db){
	if(err)console.log(err)
		console.log("Conexion establecida")
	Operaciones.consultarYActualizar(db, (error, result) =>{
		if(error)console.log("error: " +error)
	})
	/*Operaciones.eliminarRegistro(db, (error, result) =>{
		if(error)console.log("error: " +error)
	})*/

})