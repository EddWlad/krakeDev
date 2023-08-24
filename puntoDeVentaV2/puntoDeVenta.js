calcularValorTotal = function(){
    //variables para recuperar los valores de las cajas de texto
    let nombreProducto;
    let precioProducto;
    let cantidad;
    let porcentajeDescuento;
    //variables para almacenar los retornos de las funciones
    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;
    
    //1. Recuperar el nombre del producto como String
    nombreProducto = recuperarTexto("txtProducto");
    esProductoValido(nombreProducto,"lblError1");
    //2. Recuperar el precio como float
    precioProducto = recuperarFloat("txtPrecio");
    esPrecioValido (precioProducto,"lblError3");
    //3. Recuperar cantidad como int
    cantidad = recuperarInt("txtCantidad");
    esCantidadValida(cantidad,"lblError2");

    if(esProductoValido(nombreProducto,"lblError1")&&esPrecioValido (precioProducto,"lblError3")&&esCantidadValida(cantidad,"lblError2"))
    {
        //4. Invocar a calcularSubtotal y el retorno guardar en la variable valorSubtotal
        valorSubtotal= calcularSubtotal(precioProducto,cantidad);
        //5. Mostrar valorSubtotal en el componente lblSubtotal
        /*
            Caso de prueba: 
                precioProducto: 5.4  cantidad: 10
                Subtotal esperado: 54
            Si el caso de prueba es exitoso, hacer un commit
         */
        mostrarTexto("lblSubtotal",valorSubtotal.toFixed(2));
        //6. Invocar a calcularDescuento y lo que devuelve guardar en la variable valorDescuento

        valorDescuento = calcularDescuentoPorVolumen(cantidad,valorSubtotal);
         //7. Mostrar el resultado en el componente lblDescuento
        /*
            Caso de prueba: 
                precioProducto: 5.4  cantidad: 10 descuento: 10
                Descuento esperado: 5.4
            Si el caso de prueba es exitoso, hacer un commit
         */
        mostrarTexto("lblDescuento",valorDescuento.toFixed(2));
        //8. Invocar a calcularIVA y lo que devuelve guardar en la variable valorIVA
	    //   El IVA debe calcularse sobre el valor del subtotal menos el descuento
        let valor = valorSubtotal - valorDescuento;
        valorIVA = calcularIva(valor);
        //9. Mostrar el resultado en el componente lblValorIVA    
        /*
            Caso de prueba: 
                precioProducto: 5.4  cantidad: 10 descuento: 10
					--valorSubtotal: 54
					--descuento:5.4
					--valorSubtotal - descuento: 48.6
                IVA esperado: 5.832
            Si el caso de prueba es exitoso, hacer un commit
        */
        mostrarTexto("lblValorIVA",valorIVA.toFixed(2));
        //10. Invocar a calcularTotal y lo que devuelve guardar en la variable valorTotal
        valorTotal = calcularTotal(valorSubtotal,valorDescuento,valorIVA);
        //11. Mostrar el resultado en el componente lblTotal
        /*
            Caso de prueba: 
                precioProducto: 5.4  cantidad: 10 descuento: 10
					--valorSubtotal: 54
					--descuento: 5.4
					--IVA: 5.832
                Total esperado: 54.432
            Si el caso de prueba es exitoso, hacer un commit
        */
        mostrarTexto("lblTotal",valorTotal.toFixed(2));       
    }
    else
    {
        mostrarTexto("lblResultado", "0.0");
    }

}

esProductoValido = function(nombreProducto,idComponenteError)
{
    let hayErrores = false;
    if(nombreProducto == "")
    {
        mostrarTexto(idComponenteError, "CAMPO OBLIGATORIO");
        hayErrores = true;
    }

    if(nombreProducto.length>10)
    {
        mostrarTexto(idComponenteError, "PRODUCTO NO VALIDO");
        hayErrores = true;
    }

    if(hayErrores == false)
    {
        mostrarTexto(idComponenteError, "");
    }
    return !hayErrores;  
}

esCantidadValida = function(campos,idComponenteError)
{
    let hayErrores = false;
    if(isNaN(campos))
    {
        mostrarTexto(idComponenteError, "CAMPO OBLIGATORIO Y DEBE SER NUMERO");
        hayErrores = true;
    }

    if((campos<=0 || campos>=100))
    {
        mostrarTexto(idComponenteError, "ERROR EN LA CANTIDAD");
        hayErrores = true;
    }

    if(hayErrores == false)
    {
        mostrarTexto(idComponenteError, "");
    }
    return !hayErrores;     
    
}

esPrecioValido = function(campos,idComponenteError)
{
    let hayErrores = false;
    if(isNaN(campos))
    {
        mostrarTexto(idComponenteError, "CAMPO OBLIGATORIO Y DEBE SER NUMERO");
        hayErrores = true;
    }

    if((campos<=0 || campos>=50))
    {
        mostrarTexto(idComponenteError, "ERROR EN EL PRECIO");
        hayErrores = true;
    }

    if(hayErrores == false)
    {
        mostrarTexto(idComponenteError, "");
    }
    return !hayErrores;     
    
}




limpiar=function()
{
    /*
        Dejar todas las cajas de texto con el valor cadena vacía, 0 ó 0.0 según el tipo de dato
        Dejar todos los textos de los montos con el valor 0.0
        Si funciona, hacer un commit
     */
    mostrarTextoEnCaja("txtProducto", "");
    mostrarTextoEnCaja("txtCantidad", "0"); 
    mostrarTextoEnCaja("txtPrecio", "0.0"); 
    //mostrarTextoEnCaja("txtPorcentajeDescuento", "0");
    mostrarTexto("lblSubtotal", "0.0");
    mostrarTexto("lblDescuento", "0.0"); 
    mostrarTexto("lblValorIVA", "0.0");
    mostrarTexto("lblTotal", "0.0"); 
    //mostrarTexto("lblResumen", "");  

}
/* SI TODO FUNCIONA, HACER UN PUSH */