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

mostrarTextoEnCaja = function(idcomponente,mensaje)
{
    let componente;
    componente = document.getElementById(idcomponente);
    componente.value = mensaje;
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

esMayuscula = function(caracter)
{
    let letra = caracter.charCodeAt(0);

    if(letra>=65 && letra<=90)
    {
        return true;
    }
    else
    {
        return false;
    }

}

esDigito = function(caracter)
{
    let letra = caracter.charCodeAt(0);

    if(letra>=48 && letra<=57)
    {
        return true;
    }
    else
    {
        return false;
    }
}

esEspecial = function(caracter)
{
    let letra = caracter.charCodeAt(0);
    let estado;
    switch(letra)
    {
        case 45:
            estado=true;
            break;
        case 42:
            estado=true;
            break;
        case 95:
            estado=true;
            break;
        default:
            estado=false;
    }
    return estado;
}