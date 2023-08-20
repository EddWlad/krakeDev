jugar = function()
{
    let aleatorio = lazarDado();
    cambiarTexto("lblNumero", aleatorio);
    if(aleatorio>3)
    {
        cambiarTexto("lblMensaje", "ES MAYOR A 3 GANASTE");
    }
    else
    {
        cambiarTexto("lblMensaje", "ES MENOR A 3 PERDISTE ESTAS DE MALAS");
    }
}

//Crear una funcion llamada lanzarDado
//no recibe parametros
//Retorna un numero aleatorio entre 1 y 6

lazarDado = function()
{
    let valorDado;
    let aleatorio = Math.random();
    valorDado = parseInt(aleatorio*6)+1;
    return valorDado;
}