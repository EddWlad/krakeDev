
let puntos = 0;
let lanzamientos = 5;

jugar=function(){
    let resultado;
    resultado=lanzarDado();
    console.log(resultado);
    mostrarCara(resultado);
    modificarPuntos(resultado);
    modificarLanzamientos();
}

modificarPuntos = function(numero)
{
    puntos = puntos + numero;
    cambiarTexto("lblPuntos", puntos); 
    if(puntos>20)
    {
        
        cambiarTexto("lblMensaje", "¡¡¡GANASTE!!!");
        cambiarTexto("lblMensaje2", "");
        limpiar();
    }
    
    
}

modificarLanzamientos = function()
{
    
    if(lanzamientos >0 )
    {
        
        cambiarTexto("lblLanzamientos", lanzamientos); 
    }
    else
    {
        cambiarTexto("lblMensaje2", "GAME OVER");
        cambiarTexto("lblMensaje", "");
        limpiar();
    }
    lanzamientos = lanzamientos -1;
}

limpiar = function()
{
    puntos = 0;
    cambiarTexto("lblPuntos", "0"); 
    lanzamientos = 5;
    cambiarTexto("lblLanzamientos", "5");
    cambiarImagen("imgDado","") 
}

mostrarCara = function(numero)
{
    if(numero == 1)
    {
        cambiarImagen("imgDado", "dados1.png");
    }
    else if(numero == 2)
    {
        cambiarImagen("imgDado", "dados2.png");
    }
    else if(numero == 3)
    {
        cambiarImagen("imgDado", "dados3.png");
    }
    else if(numero == 4)
    {
        cambiarImagen("imgDado", "dados4.png");
    }
    else if(numero == 5)
    {
        cambiarImagen("imgDado", "dados5.png");
    }
    else if(numero == 6)
    {
        cambiarImagen("imgDado", "dados6.png");
    }
    
}

lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    return valorDado;
}