const validarPwd = require("../validarPwd");

describe("validarPwd", () => {
  //Queremos validar la funcion de validPWD que garantiza que la contraseña sea valida.
  //No queremos validar a pelo que sea mayor que 6 caracteres porque podrian añadirse posteriormente mas restricciones 
  // entonces queremos que la funcion validPWD sea testeada

  test("validPwd debe retornar false si no se pasa contraseña", async() => {
    const valid = await validarPwd();
    expect(valid).toBe(false);
  });

  test("validPwd debe retornar false si la contraseña es menor que 6 caracteres", async() => {
    const valid = await validarPwd("123");
    expect(valid).toBe(false);
  });

  test("validPwd debe retornar false si la contraseña no tiene al menos un numero", async() => {
    const valid = await validarPwd("abcdef");
    expect(valid).toBe(false);
  });
 
  test("validPwd debe retornar false si la contraseña no tiene al menos una letra", async() => {
    const valid = await validarPwd("123456");
    expect(valid).toBe(false);
  });

  test("validPwd debe retornar false si la contraseña no tiene al menos un caracter especial", async() => {
    const valid = await validarPwd("123456a");
    expect(valid).toBe(false);
  });

  test("validPwd debe retornar true si la contraseña cumple con los requisitos", async() => {
    //mayor que 6, una letra, un numero, un caracter especial
    const valid = await validarPwd("123456a!");
    expect(valid).toBe(true);
  });

});