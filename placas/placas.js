validarPlaca = function()
{
    let placa;
    let erroresEstructura;
    let provincia;
    let tipo;
    let diaPicoYPlaca;
    placa = recuperarTexto("txtPlaca");
    erroresEstructura = validarEstructura(placa);
    tipo = obtenerTipoVehiculo(placa);
    provincia = obtenerProvincia(placa);
    diaPicoYPlaca = obtenerDiaPicoYPlaca(placa);
    
    if (erroresEstructura == null) 
    {
        mostrarTexto("lblValida","LA PLACA ES VALIDA");
        mostrarTexto("lblProvincia",provincia);
        mostrarTexto("lblTipo",tipo);
        mostrarTexto("lblpicoYPlaca",diaPicoYPlaca);
        mostrarTexto("lblIncorrecta","");
    }
    else
    {
        
        mostrarTexto("lblIncorrecta",erroresEstructura);
        mostrarTexto("lblValida","");
        mostrarTexto("lblProvincia","");
        mostrarTexto("lblTipo","");
        mostrarTexto("lblpicoYPlaca","");
        
    }
}

limpiar = function()
{
        mostrarTextoEnCaja("txtPlaca","");
        mostrarTexto("lblValida","");
        mostrarTexto("lblIncorrecta","");
        mostrarTexto("lblValida","");
        mostrarTexto("lblProvincia","");
        mostrarTexto("lblTipo","");
        mostrarTexto("lblpicoYPlaca","");
}