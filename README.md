# TDD_test

## About The Project

Este es un proyecto básico para practicar el desarrollo orientado por testing. Se realizarán dos endpoints:

### Endpoints

- **GET /** : endpoint que recibe por parámetros un `id`.
  - Si no recibe `id`, retornará un status `404` y un texto `'404 Not Found'`.
  - Si recibe `id`, retornará un status `200` y un texto `'Hello World!'`.

- **POST /user** : recibe por parámetros un `name` y un `pwd`.
  - Si no recibe `name` o `pwd`, retornará un status `400` y un texto `'400 Bad Request'`.
  - Si no cumple con la validación de `validarPwd`, retornará un status `400` y un texto `'400 invalid pwd'`.
  - Si cumple con todos los requisitos, retornará un status `200` y un texto `'200 OK'`.

### Función `validarPwd`
La función `validarPwd` verifica si la contraseña cumple con los siguientes requisitos:
- Debe tener **al menos 6 caracteres**.
- Debe contener **mínimo un número**.
- Debe contener **mínimo una letra**.
- Debe contener **mínimo un carácter especial**.

Si no cumple con alguno de estos requisitos, retornará `false`.

## Getting Started

### Requisitos previos

1. Tener instalado [Node.js](https://nodejs.org/) en tu sistema.
2. Tener configurado un entorno de desarrollo para ejecutar las pruebas y el servidor. (JEST y SUPERTEST)

### Instrucciones

1. **Iniciar el servidor**  
   Ejecuta el siguiente comando para iniciar la aplicación:
   ```bash
   npm run start
   npm run test
