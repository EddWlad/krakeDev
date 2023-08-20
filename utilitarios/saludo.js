
saludar = function()
{
    // recuperar el valor de la caja de texto txtNombre
    let nombre = recuperarTexto("txtNombre");
     // recuperar el valor de la caja de texto txtApellido
    let Apellido = recuperarTexto("txtApellido");
}

recuperarTexto = function(idcomponente)
{
    let componente;
    let valorIngresado;
    componente = document.getElementById(idcomponente);
    valorIngresado = componente.value;
    return valorIngresado;
}