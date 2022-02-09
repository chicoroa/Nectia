# Nectia - Prueba Técnica enfocada en las tareas BackEnd Nicolás Roa

Se utilizo NodeJS, NestJs, Passport, JWT, Swagger y sqlite en memoria

Para Obtener el Token se debe realizar desde PostMan u otra herramienta una petición Post al url http://localhost:3000/auth/login con el siguiente cuerpo

{
    "username": "nroa", 
    "password": "1234"
}



Esto nos devolvera el Token el cual debe ir en swagger para que nos permita crear un nuevo Vehiculo


