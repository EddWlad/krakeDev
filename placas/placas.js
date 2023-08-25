validarPlaca = function()
{
    let placa;
    let erroresEstructura;
    let provincia;
    let tipo;
    placa = recuperarTexto("txtPlaca");
    erroresEstructura = validarEstructura(placa);
    tipo = obtenerTipoVehiculo(placa);
    
    if (erroresEstructura == null) 
    {
        mostrarTexto("lblValida","LA PLACA ES VALIDA");
        provincia = obtenerProvincia(placa);
        mostrarTexto("lblProvincia",provincia);
        mostrarTexto("lblTipo",tipo);
        mostrarTexto("lblIncorrecta","");
    }
    else
    {
        mostrarTexto("lblIncorrecta",erroresEstructura);
        mostrarTexto("lblValida","");
        mostrarTexto("lblProvincia","");
        mostrarTexto("lblTipo","");
    }
}

