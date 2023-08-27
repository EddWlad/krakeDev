recorrerCadena = function(cadena)
{
    let caracter;
    for(let posicion = 0; posicion<cadena.length;posicion++)
    {
        caracter = cadena.charAt(posicion);
        console.log(caracter);
    }
}

invertirCadena = function(cadena)
{
    let caracter;
    let alrevez = "";
    for(let posicion = cadena.length; posicion >=0;posicion--)
    {
        caracter = cadena.charAt(posicion);
        alrevez = alrevez+caracter;
         
    }
    mostrarTexto("txtInvertida",alrevez);
}

ejecutarPrueba1 = function()
{
    let mensaje;
    mensaje = recuperarTexto("txtCadena")
    recorrerCadena(mensaje);

}

ejecutarPrueba2 = function()
{
    let mensaje;
    mensaje = recuperarTexto("txtCadena");
    invertirCadena (mensaje);
    
}