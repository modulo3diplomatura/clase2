*crear cuenta de github
*Instalar Node.js, Instalar visual studio code
*Instalar git bash para poder hacer un git push a mi repositorio

En la terminal de windows o en gitbash y dentro de la carpeta del proyecto podemos utilizar los comandos:
(Verifica que la terminal este en la direccion de el proyecto ejemplo c:/modulo3/practico1)

-git init (Para inicializar un repositorio desde nuestra carpeta donde esta situada la terminal)

-git add . (prepara/agrega todos los archivos de la carpeta)

-git commit -m "Primer commit o comentario" (Agregamos un comentario a la subida del repositrio)

Para Vincular un repositorio diferente podemos ejecutar este comando
-git remote add origin https://github.com/usuario/nombre-repo.git

Comando para subir los cambios a el repositorio
-git push -u origin main (pushear/subir a el repositorio con origen main(main es el origen por defecto))

Configurar git con nombre de usuario y email:

git config --global user.name "Tu Nombre"
git config --global user.email "tu_correo@example.com"

Configuración local por proyecto
git config user.name "modulo3diplomatura" 
git config user.email "githubusernew@gmail.com"
