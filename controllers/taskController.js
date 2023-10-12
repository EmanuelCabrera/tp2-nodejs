const db = require('../models');

const handlerError = (err) => {
    let errors ={}

    if (err == 19) {
        errors.id='Por favor ingrese un titulo'
    }
    
    return errors
}

module.exports.saveTask = async (req,res) =>{
    const {id,titulo,descripcion,completada} = req.body

    try{
        const tarea = await db.Task.create({id,titulo,descripcion,completada})
        res.status(201).json({tarea:tarea})
    }
    catch (error) {
        const errors = handlerError(error.parent.errno)
        res.status(400).json({errors})
    }
}

module.exports.getTask = async(req,res) =>{
  return db.Task.findAll()
  .then((task) => {
    res.status(200).json(task)
  })
  .catch((err) => {
    console.log('There was an error querying task', JSON.stringify(err))
    res.status(204).json(err)
  });
}

module.exports.getTaskById = async(req,res) =>{
    const {id} = req.params 
    const task = await db.Task.findByPk(id)
    if(task){
        res.status(200).json(task)
    }else{
        res.status(404).json()
    }
    
}

module.exports.putTaskById = async(req,res) =>{
    const {id} = req.params 
    const {titulo,descripcion,completada} = req.body
    
    const task = await db.Task.findByPk(id)
    task.titulo = titulo
    task.descripcion = descripcion
    task.completada = completada

    await task.save()
    
    if(task){
        res.status(202).json(task)
    }else{
        res.status(404).json()
    }
  
}


module.exports.deleteTaskById = async(req,res) =>{
    const {id} = req.params 
    const task = await db.Task.findByPk(id)
    if (task) {
        task.destroy()
        res.status(200).json(task)
    }else{
        res.status(404).json('No se encontro ninguna tarea con ese id')
    }
}


module.exports.getTaskByFilter = async(req,res) =>{
    const {completada} = req.params 

    const tasks = await db.Task.findAll({where:{completada:completada}})
    if (tasks) {
        res.status(200).json(tasks)
    }else{
        res.status(404).json('No se encontro ninguna tarea con ese filtro')
    }
}