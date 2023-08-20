calcularPromedioNotas = function()
{
    let nota1 = recuperarFloat("textNota1");
    let nota2 = recuperarFloat("textNota2");
    let nota3 = recuperarFloat("textNota3");

    let promedio = calcularPromedio(nota1,nota2,nota3).toFixed(2);

    if(promedio>7)
    {
        let mensaje = "Felicidades su nota es: "+promedio;
        mostrarTexto("lblPromedio",mensaje);
        mostrarImagen("imgEstado","./img/exito.gif");
    }
    else
    {
        let mensaje2 = "Desafortunadamente su nota es: "+promedio+" no pasa el curso";
        mostrarTexto("lblPromedio",mensaje2);
        mostrarImagen("imgEstado","./img/fracaso.gif");
    }
    
}