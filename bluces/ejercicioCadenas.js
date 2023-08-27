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

buscarLetra = function(cadena, letra)
{
    let letraIterada;
    let existeLetra = false;
    for (let i=0; i<cadena.length; i++)
    {
        letraIterada = cadena.charAt(i);
        if(letraIterada == letra)
        {
            existeLetra = true;
        }
    }
    if(existeLetra == true)
    {
        return true;
        console.log("existe");
    }
    else
    {
        return false;
        console.log("no existe");
    }
}

contarMayusculas = function(cadena)
{
    let letra;
    let contadorMayusculas;
    for (let i=0; i<cadena.length; i++)
    {
        letra = cadena.charAt(i);
        if(esMatyusculas(letra))
        {
            contadorMayusculas++;
        }
    }
    console.log(contadorMayusculas);
}