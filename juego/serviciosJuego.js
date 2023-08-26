obtenerAleatorio= function()
{
    let valorjuego;
    let aleatorio = Math.random();
    valorjuego = parseInt(aleatorio*3)+1;
    return valorjuego;
}

generarElemento = function()
{
    let valorElemento = obtenerAleatorio();
    let valoresJuego;
    switch(valorElemento)
    {
        case 1:
            valoresJuego = "PIEDRA"
            break;

        case 2:
            valoresJuego = "PAPEL"
            break;

        case 3:
            valoresJuego = "TIJERA"
            break;
    }

    return valoresJuego;
}

determinarGanador = function(eleccionJugador1, eleccionJugador2)
{
    let valorGanador;

    if (eleccionJugador1 === "PIEDRA" && eleccionJugador2 ==="PAPEL")
    {
        valorGanador = 2;
    }
    if (eleccionJugador1 === "PIEDRA" && eleccionJugador2 ==="TIJERA")
    {
        valorGanador = 1;
    }
    if (eleccionJugador1 === "PIEDRA" && eleccionJugador2 ==="PIEDRA")
    {
        valorGanador = 0;
    }
    


    if (eleccionJugador1 === "PAPEL" && eleccionJugador2 ==="PIEDRA")
    {
        valorGanador = 1;
    }
    if (eleccionJugador1 === "PAPEL" && eleccionJugador2 ==="TIJERA")
    {
        valorGanador = 2;
    }
    if (eleccionJugador1 === "PAPEL" && eleccionJugador2 ==="PAPEL")
    {
        valorGanador = 0;
    }


    if (eleccionJugador1 === "TIJERA" && eleccionJugador2 ==="PIEDRA")
    {
        valorGanador = 2;
    }
    if (eleccionJugador1 === "TIJERA" && eleccionJugador2 ==="TIJERA")
    {
        valorGanador = 0;
    }
    if (eleccionJugador1 === "TIJERA" && eleccionJugador2 ==="PAPEL")
    {
        valorGanador = 1;
    }

    return valorGanador;

}

generarRuta = function(nombre)
{
    let ruta;
    switch (nombre)
    {
        case "PIEDRA":
            ruta = "./img/piedra.png";
            break;
        
        case "TIJERA":
            ruta = "./img/tijera.png";
            break;
            
        default:
            ruta = "./img/papel.png";     
    }
    return ruta;
}