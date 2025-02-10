# TDD_test

## About The Project

Este es un proyecto básico para practicar el desarrollo orientado por testing. Se realizarán dos endpoints:.
- GET / : endpoint que recibe por parametros un id.
    En caso de no recibir id retornará un status 400 y un text '404 Not Found'.
    En caso de recibil el id retornará un status 200 y un text 'Hello World!'.

- POST /user : recibe por parametros un name y un pwd.
    En caso de no recibir name o pwd retornará un status 400 y un text '400 Bad Request'.
    En caso de no cumplir la validacion de validPwd retornaráun status 400 y un text '400 invalid pwd'.
    En caso de cumplir los requisitos retornará un status 200 y un text '200 OK'.

- Funcion validPwd
  Debe retornar false si no cumple alguno de los siguientes requisitos:
    - Cadena mayor o igual a 6 caracteres.
    - Tiene mínimo un número.
    - Tiene mínimo una letra.
    - Tiene mínimo un carácter especial

## Getting Started
Iniciar - npm run start
Testear y ver coverage - npm run test
