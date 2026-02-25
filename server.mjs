// import fs from 'fs';

// // Leer un archivo de manera asíncrona
// fs.readFile('./data/example.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log('Contenido del archivo:', data);
// });

// // Escribir en un nuevo archivo
// fs.writeFile('./data/example.txt', 'Contenido nuevo', (err) => {
//     if (err) throw err;
//     console.log('Archivo creado y escrito');
// });

// // Renombrar un archivo
// fs.rename('./data/newfile.txt', './data/renamedfile.txt', (err) => {
//     if (err) throw err;
//     console.log('Archivo renombrado');
// });

// // Eliminar un archivo
// fs.unlink('./data/newfile.txt', (err) => {
//     if (err) throw err;
//     console.log('Archivo eliminado');
// });


import path from 'path';

// Definir una ruta de archivo de ejemplo
const filePath = './data/example.txt';

// Obtener el directorio base
const dirName = path.dirname(filePath);
console.log('Directorio base:', dirName);

// Obtener el nombre del archivo sin extensión
const baseName = path.basename(filePath, '.txt');
console.log('Nombre del archivo:', baseName);

// Obtener la extensión del archivo
const extName = path.extname(filePath);
console.log('Extensión del archivo:', extName);

// Crear una ruta unida
const newPath = path.join('/user', 'docs', 'newfile.txt');
console.log('Nueva ruta:', newPath);
