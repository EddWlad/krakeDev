esMayuscula = function(caracter)
{
    let letra = caracter.charCodeAt(0);
    let estado;
    if(letra>=65 && letra<=90)
    {
        estado = true;
    }
    else
    {
        estado =  false;
    }
    return estado;
}

esDigito = function(caracter)
{
    let letra = caracter.charCodeAt(0);
    let estado;
    if(letra>=48 && letra<=57)
    {
        estado = true;
    }
    else
    {
        estado = false;
    }
    return estado;
}

esGuion = function(caracter)
{
    let letra = caracter.charCodeAt(0);
    let estado;
    if(letra == 45)
    {
        estado = true;
    }
    else
    {
        estado = false;
    }
    return estado;
}


mostrarImagen=function(idComponente,rutaImagen){
    let componente;
    componente=document.getElementById(idComponente);
    componente.src =  rutaImagen;
}
mostrarTexto=function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.innerText = mensaje;
}
mostrarTextoEnCaja = function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.value = mensaje;
}

recuperarTexto=function(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value;
    return valorIngresado;
}

recuperarInt = function(idComponente){
   let valorCaja= recuperarTexto(idComponente);
   let valorEntero = parseInt(valorCaja);
   return valorEntero;
}

recuperarFloat = function(idComponente){
    let valorCaja= recuperarTexto(idComponente);
    let valorFlotante = parseFloat(valorCaja);
    return valorFlotante;
 }


