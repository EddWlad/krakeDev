
saludar = function()
{
    // recuperar el valor de la caja de texto txtNombre
    let nombre = recuperarTexto("txtNombre");
     // recuperar el valor de la caja de texto txtApellido
    let apellido = recuperarTexto("txtApellido");

    let edad = recuperarInt("txtEdad");
    let estatura = recuperarFloat("txtEstatura");

    let mensajeBienvenida = "Bienvenido "+nombre+" "+apellido;

    mostrarTexto("lblResultado", mensajeBienvenida);
    mostrarImagen("imgSaludo", "./imagenes/saludoKyojuro.gif")
}

mostrarImagen = function(idcomponente,rutaImagen)
{
    let componente;
    componente = document.getElementById(idcomponente);
    componente.src = rutaImagen;
}

recuperarTexto = function(idcomponente)
{
    let componente;
    let valorIngresado;
    componente = document.getElementById(idcomponente);
    valorIngresado = componente.value;
    return valorIngresado;
}

mostrarTexto = function(idcomponente,mensaje)
{
    let componente;
    componente = document.getElementById(idcomponente);
    componente.innerText = mensaje;
}

recuperarInt = function(idcomponente)
{
    let valorCaja = recuperarTexto(idcomponente);
    let valorEntero = parseInt(valorCaja);
    return valorEntero;
}

recuperarFloat = function(idcomponente)
{
    let valorCaja = recuperarTexto(idcomponente);
    let valorFloat = parseFloat(valorCaja);
    return valorFloat;
}