const request = require('supertest')
const app = require('../main')

describe( 'task tests', () =>{

    test('debe recuperar una tarea por id, simulando uso de la ruta /tareas/:id', async () =>{
        const response = await request(app).get('/tareas/'+1)
        expect(response.statusCode).toBe(200)
    })
    test('debe recuperar todas las tarea /tareas', async () =>{
        const response = await request(app).get('/tareas')
        expect(response.statusCode).toBe(200)
    })

    test('debe crear una tarea', async () =>{
        const body = {
            "titulo":"Prueba",
            "descripcion":"Prueba de tareas",
            "completada":true
        }
        const response = await request(app).post('/tareas').send(body)
        expect(response.statusCode).toBe(201)
    })

    test('debe modificar una tarea', async () =>{
        const body = {
            "titulo":"Pruebas",
            "descripcion":"Prueba de tareas",
            "completada":true
        }
        const response = await request(app).put('/tareas/'+1).send(body)
        expect(response.statusCode).toBe(202)
    })
})