let puntosUsuario = 0;
let puntosComputador = 0;
jugar = function(seleccionado)
{
   let eleccion = generarElemento();
   let imgEleccion = generarRuta(eleccion);
   let ganador = determinarGanador(eleccion,seleccionado)

   switch(ganador)
   {
        case 0:
            mostrarTexto("lblResultado", "EMPATE");
            mostrarImagen("imgEleccionComputador",imgEleccion);
            break;
        case 1:
            mostrarTexto("lblResultado", "PERDISTE LA PARTIDA!!"); 
            mostrarImagen("imgEleccionComputador",imgEleccion);
            puntosComputador = puntosComputador +1;
            mostrarTexto("lblPuntosAdversario", puntosComputador);
            break;
        case 2:
            mostrarTexto("lblResultado", "GANASTE LA PARTIDA!!");
            mostrarImagen("imgEleccionComputador",imgEleccion);
            puntosUsuario = puntosUsuario +1;
            mostrarTexto("lblMisPuntos", puntosUsuario);
            break;
   }

   if(puntosComputador == 5)
   {
        mostrarTexto("lblResultado", "EL COMPUTADOR TE HA VENCIDO!!");


   }
   else if (puntosUsuario == 5)
   {
        mostrarTexto("lblResultado", "HAZ GANADO EL JUEGO!!");

   }

}

limpiar = function()
{
    mostrarImagen("imgEleccionComputador","");
    puntosComputador = 0;
    mostrarTexto("lblPuntosAdversario", 0);
    puntosUsuario = 0;
    mostrarTexto("lblMisPuntos",0);
    mostrarTexto("lblResultado", "");
    
    
}