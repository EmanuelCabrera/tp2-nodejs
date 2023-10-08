const {Router} = require('express')

const taskController = require('../controllers/taskController')

const router = Router()

router.get('/tareas', taskController.getTask)

// router.post('/tareas', taskController.saveTask)

// router.get('/tareas/:id', taskController.getTaskById)

// router.put('/tareas/:id', taskController.putTaskById)

// router.delete('/tareas/:id', taskController.deleteTaskById)


module.exports = router
