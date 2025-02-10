function validarPwd(pwd) {
  if (!pwd) return false;                   // Si no hay contraseña
  if (pwd.length < 6) return false;           //Al menos 6 caracteres
  const tieneNumero = /\d/.test(pwd);        // Al menos un número
  const tieneLetra = /[a-zA-Z]/.test(pwd);   // Al menos una letra
  const tieneEspecial = /[^a-zA-Z0-9]/.test(pwd); // Al menos un carácter especial

  return tieneNumero && tieneLetra && tieneEspecial;
}

module.exports = validarPwd;