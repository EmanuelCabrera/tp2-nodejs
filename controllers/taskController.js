const db = require('../models');

let tasks = []
//manipulacion de errores
const handlerError = (err) => {
    let errors ={}

    if (err.message==='Por favor ingrese un id') {
        errors.id='Por favor ingrese un id'
    }

    if (err.message==='Por favor ingrese un nombre') {
        errors.nombre='Por favor ingrese un nombre'
    }
    if ( err.code === 11000) {
        errors.id='El id ya se encuentra registrado'
        return errors
    }

    //validacion de errores
    if(err.message.includes('tarea validation failed')){
        Object.values(err.errors).forEach(({properties}) =>{
            errors[properties.path] = properties.message

        })
    }
    return errors
}

// module.exports.saveTask = async (req,res) =>{
//     const {id,nombre,descripcion,fechaAlta,completada} = req.body
//     let fechaCreacion = new Moment(new Date(fechaAlta))

//     try{
//         const tarea = await Tarea.create({id,nombre,descripcion,fechaCreacion,completada})
//         if (tasks.length > 0) { 
//             tasks.push(tarea)
//         }else{
//             tasks.push(await Tarea.getAllTasks())
//         }
//         res.status(201).json({tarea:tarea._id})
//     }
//     catch (error) {
//         console.log(error)
//         const errors = handlerError(error)

//         res.status(400).json({errors})
//     }
// }

module.exports.getTask = async(req,res) =>{
  return db.Task.findAll()
  .then((task) => {
    res.send(task)
    res.status(200).json(tasks)

  })
  .catch((err) => {
    console.log('There was an error querying task', JSON.stringify(err))
    res.status(204).json()
    return res.send(err)
  });
}

// module.exports.getTaskById = async(req,res) =>{
//     const {id} = req.params 
//     if (tasks.length === 0) { 
//         tasks = await Tarea.getAllTasks()
//     }

//     const task = tasks.find((task) =>{
//         return task.id === id
//     })

//     if(task){
//         res.status(200).json(task)
//     }else{
//         res.status(404).json()
//     }
    
// }

// module.exports.putTaskById = async(req,res) =>{
//     const {id} = req.params 
//     const {nombre,descripcion,fechaAlta,completada} = req.body
    
//     let onsucces = async function () {
        
//         const task = tasks.find((task) =>{
//             return task.id === id
//         })
//         task.nombre = nombre
//         task.descripcion = descripcion
//         task.fechaCreacion = new Moment(new Date(fechaAlta))
//         task.completada = completada

//         await task.save()
        
//         if(task){
//             res.status(202).json(task)
//         }else{
//             res.status(404).json()
//         }
//     }
//     if (tasks.length === 0) { 
//         tasks = await Tarea.getAllTasks()
//         onsucces()
//     }else{
//         onsucces()
//     }
// }


// module.exports.deleteTaskById = async(req,res) =>{
//     const {id} = req.params 
//     const {nombre,descripcion,fechaAlta,completada} = req.body
    
//     let onsucces = async function () {
        
//         const task = tasks.find((task) =>{
//             return task.id === id
//         })
        
//         await Tarea.findByIdAndDelete({ _id: task._id}).then(function(){
//             console.log("Tarea eliminada"); // Success
//         }).catch(function(error){
//             console.log(error); // Failure
//         });
//         // await Tarea.deleteById(task._id);
//         tasks.forEach(task => {
//             if (task.id == id) {
//                 tasks.pop(task)
//             }
//         });
        
//         if(task){
//             res.status(202).json(task)
//         }else{
//             res.status(404).json()
//         }
//     }

//     if (tasks.length === 0) { 
//         tasks = await Tarea.getAllTasks().then( () =>{
//             onsucces()
//         })
//     }else{
//         onsucces()
//     }
// }