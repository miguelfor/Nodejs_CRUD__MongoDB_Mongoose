module.exports.insertarRegistro = function(db ,callback){
	let coleccion =db.collection("users")

	coleccion.insertMany([
	{nombre: "David", edad:25, peso:70},
	{nombre: "steven", edad:35, peso:80},
	{nombre: "Fernando", edad:40, peso:89}
	], (error, result) => {
		console.log("resultado del insert: " + result.toString())
	})
}

module.exports.eliminarRegistro = function(db, callbck){
	let coleccion = db.collection("users")
	try{
		//coleccion.deleteMany({edad:40})//or remove
		coleccion.deleteOne({edad:40})
		console.log("se eliminoregistro correctamente")
	}catch(e){
		console.log("se genero un error" + e)
	}
}

module.exports.consultarYActualizar= function(db, callback){
	let coleccion =db.collection("users")

	coleccion.find().toArray((error, documents) =>{
		if(error)console.log(error)
		console.log(documents)
		callback()
	})

	try{
		coleccion.updateOne({nombre: "steven" },{ $set: {peso: 23}})
		console.log("se ha actualizado correctamente")
	}catch(e){
		console.log("Error actualizando registros"+e)
	}

	coleccion.find().toArray((error, documents) =>{
		if(error)console.log(error)
		console.log(documents)
		callback()
	})
}
