# HuntTheGame

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.6.

Hunt The Game es una app desarrollada para dispositivos móviles, por lo tanto debe de tenerse en cuenta solo la vista para dicho dispositivo.

Los datos de los usuarios y productos están en la base de datos (MySQL).

El backend ha sido desarrollado con spring boot así que debe de ejecutarse como una aplicación de Spring
(Recordar cambiar la base de datos, usuario y contraseña en spring en el archivo application.properties)

# Como usar el backend
-Para abrir el backend recomiendo usar el IDE Eclipse, luego creas un workspace ( File -> Switch workspace -> Other )

-Seleccionas la ruta donde este la carpeta del backend, Ejemplo: "Downloads\Nthehunter-HuntTheGame-DAD-main\BackendDatabase"

-Una vez hecho lo anterior añadiremos los archivos al proyecto, de esta manera ( File -> open proyect from file system ) 

-En import source seleccionas el directorio "Nthehunter-HuntTheGame-DAD-main\BackendDatabase\HuntTheGame"

-Una vez seleccionado le das a "Finish" y podrás usar el backend en eclipse dandole a click derecho al proyecto y "run as Spring boot App".

 -- Nota importante: En el IDE debes de tener instalado el plugin de spring boot. --
 
 # Como iniciar el frontend
 - Se necesita tener instalado angular, recomiendo usar visual studio code para ejecutarlo.
 - En la consola de comando, situandote dentro de la carpeta HuntTheGame ejecutamos el comando : ng serve --open 
 - Una vez hecho lo anterior se ejecutará la app

-- Nota algunas funciones como el login o la busqueda no funcionarán correctamente si no se ha iniciado el backend --
 
 Puertos de cada servicio:
 Angular: 4200
 Spring boot: 8080
 Mysql: 3306
 
 

Usuario y contraseña de pruebas para el frontend:
Usuario: Nael  Contraseña: Root_1234

Productos de pruebas para el frontend:
1. The legend of zelda Breath of the wild
2. Super smash bros: Ultimate

Se debe de iniciar sesión previamente para poder hacer uso de la búsqueda.
