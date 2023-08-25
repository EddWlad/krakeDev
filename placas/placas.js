validarPlaca = function()
{
    let placa;
    let erroresEstructura;
    placa = recuperarTexto("txtPlaca");
    erroresEstructura = validarEstructura(placa);
    
    if (erroresEstructura == null) 
    {
        mostrarTexto("lblValida","LA PLACA ES VALIDA");
        mostrarTexto("lblIncorrecta","");
    }
    else
    {
        mostrarTexto("lblIncorrecta",erroresEstructura);
        mostrarTexto("lblValida","");
    }
}

