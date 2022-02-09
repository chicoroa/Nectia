# Nectia - Prueba Técnica enfocada en las tareas BackEnd Nicolás Roa

Para esto se realizo un estudio de documentación oficial de NestJs (https://docs.nestjs.com/)


Se utilizo NodeJS, NestJs, Passport, JWT, Swagger y Sqlite en memoria

Para iniciar el proyecto se debe acceder a la carpeta del proyecto y ejecutar el comando npm run start 

Para Obtener el Token se debe realizar desde PostMan u otra herramienta una petición Post al url http://localhost:3000/auth/login con el siguiente cuerpo

{
    "username": "nroa", 
    "password": "1234"
}

Como la base de datos es en memoria se creo este usuario en una lista de usuario el cual esta ubicado en el archivo "nectia\src\users\users.service.ts"

![image](https://user-images.githubusercontent.com/8826597/153129501-cb67b779-3ecf-4b54-990b-78de2b0a86cb.png)


Esto nos devolvera el Token el cual debe ir en swagger para que nos permita crear un nuevo Vehiculo

![image](https://user-images.githubusercontent.com/8826597/153129797-763f8294-fc71-45f3-9ba9-9a71584399fd.png)

Agregamos el token y ponemos Authorizate y luego Close

![image](https://user-images.githubusercontent.com/8826597/153129870-48b53234-63f3-4d87-af06-37fe4e145121.png)

Ahora podremos agregar nuestros Vehiculos

#OJO Si nos sale que no estamos autorizados (401) es por que el token se refresco dura 60 segundos y debemos generar un nuevo token
![image](https://user-images.githubusercontent.com/8826597/153130207-77a05f2f-4198-4606-bfef-1b10dc6ea6ea.png)

Nuevo Token

![image](https://user-images.githubusercontent.com/8826597/153130326-cf849317-ba9d-45b1-a726-d4b0330f528c.png)

Si queremos realizar una busqueda de los autos se debe generar otro Token ya que se refresca por peticion

![image](https://user-images.githubusercontent.com/8826597/153130582-466d58c2-1eff-4548-9f45-95efe5a44e12.png)



