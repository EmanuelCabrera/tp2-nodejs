# API TASK
Esta api permite la gestion de tareas, el mismo corre en el puerto 4000
## Instalacion 

Ejecutar el comando npm i para instalar todas las dependencias
```
npm install
```
Luego ejecutar los comando para la creacion y carga de datos de prueba de la api
```
npx sequelize db:migrate
npx sequelize db:seed:all  
```

## Rutas
Las diferentes rutas que utiliza la api son:
Ruta GET "/tareas" devuelve todas las tareas insertadas
```
localhost:4000/tareas
```
Ruta GET "/tareas/:id" devuelve una tarea en especifico, mediante su ID
```
localhost:4000/tareas/1
```
Ruta GET "/tareas/filter/:id" esta ruta se encarga de recuperar las tareas mediante el filtro de si estan completadas o no, 1 para completadas 0 para no completadas
```
localhost:4000/tareas/filter/1

```
Ruta POST "/tareas" esta ruta se encarga de crear nuevas tareas se le pasa un json por ej:
```
localhost:4000/tareas

{
    "titulo":"tarea prueba ",
    "descripcion":"Prueba de tareas",
    "completada":true
}
```
Ruta PUT "/tareas/:id" esta ruta se encarga de modificar una tarea en especifico mediante su id, se le pasa un json por ej:
```
localhost:4000/tareas/1

{
    "titulo":"modificar prueba ",
    "descripcion":"Prueba de tareas",
    "completada":true
}
```
Ruta DELETE "/tareas/:id" esta ruta se encarga de eliminar una tarea en especifico mediante su id
```
localhost:4000/tareas/1

```
