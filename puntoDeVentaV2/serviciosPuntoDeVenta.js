
//calcularValorDescuento = function(monto, porcentajeDescuento)
//{
    //let descuento = (monto*porcentajeDescuento)/100;
    //return descuento;
//}


calcularSubtotal = function(precio,cantidad)
{
    let subtotal = (precio*cantidad);
    return subtotal;
}

calcularDescuentoPorVolumen = function(cantidad,subtotal)
{
    let descuento;
    if(cantidad<3)
    {
        descuento = subtotal*0;
    }
    else if(cantidad>=3 && cantidad<=5)
    {
        descuento = subtotal*0.03;
    }
    else if(cantidad>=6 && cantidad<=11)
    {
        descuento = subtotal*0.04;
    }
    else
    {
        descuento = subtotal*0.05;
    }
    return descuento;
}

calcularIva = function(monto)
{
    let iva = monto * 0.12;
    return iva;
}


calcularTotal = function(subtotal,descuento,iva)
{
    let total = subtotal - descuento + iva;
    return total;
}

