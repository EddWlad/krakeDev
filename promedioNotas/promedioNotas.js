calcularPromedioNotas = function()
{
    let nota1 = recuperarFloat("textNota1");
    let nota2 = recuperarFloat("textNota2");
    let nota3 = recuperarFloat("textNota3");

    let promedio = calcularPromedio(nota1,nota2,nota3).toFixed(2);

    if(promedio>8 && promedio<=10)
    {
        let mensaje = "EXCELENTE: "+promedio+" PUNTOS";
        mostrarTexto("lblPromedio",mensaje);
        mostrarImagen("imgEstado","./img/exito.gif");
    }
    else if(promedio>=5 && promedio<=8)
    {
        let mensaje = "BUEN TRABAJO: "+promedio+" PUNTOS";
        mostrarTexto("lblPromedio",mensaje);
        mostrarImagen("imgEstado","./img/buenTrabajo.gif");  
    }
    else if(promedio<5 && promedio>0)
    {
        let mensaje = "REPROBADO: "+promedio+" PUNTOS";
        mostrarTexto("lblPromedio",mensaje);
        mostrarImagen("imgEstado","./img/fracaso.gif");  
    }

    else
    {
        let mensaje2 = "!DATOS INCORRECTOS!";
        mostrarTexto("lblPromedio",mensaje2);
        mostrarImagen("imgEstado","./img/error.gif");
    }
    
}