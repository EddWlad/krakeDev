
ejecutarValidacion = function()
{
    let contraseña;
    let resultado = "";
    contraseña = recuperarTexto("txtContraseña");
    resultado = validarPassword(contraseña);
    mostrarTexto("txtValidaciones", resultado);
}

validarPassword = function(password)
{
    let observaciones = "";
    observaciones += validarLongitud(password) + "\n";
    observaciones += validarMayuscula(password) + "\n";
    observaciones += validarDigito(password) + "\n";
    observaciones += validarEspecial(password);

    return observaciones.trim();
}

validarLongitud = function(password)
{
    if (password.length >= 8 && password.length <= 16)
    {
        return "";
    }
    else
    {
        return "La contraseña debe tener entre 8 y 16 caracteres.";
    }
}

validarMayuscula = function(password)
{
    for (i = 0; i < password.length; i++)
    {
        let letra = password.charAt(i);
        if (esMayuscula(letra))
        {
            return "";
        }
    }
    return "La contraseña debe contener al menos una mayúscula.";
}

validarDigito = function(password)
{
    for (i = 0; i < password.length; i++)
    {
        let letra = password.charAt(i);
        if (esDigito(letra))
        {
            return "";
        }
    }
    return "La contraseña debe contener al menos un dígito.";
}

validarEspecial = function(password)
{
    for (i = 0; i < password.length; i++)
    {
        let letra = password.charAt(i);
        if (esEspecial(letra))
        {
            return "";
        }
    }
    return "La contraseña debe contener al menos un caracter especial.";
}
