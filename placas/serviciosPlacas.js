validarEstructura = function(placa)
{
    let cmpPlaca = placa.charAt(0);
    let cmpPlaca1 = placa.charAt(1);
    let cmpPlaca2 = placa.charAt(2);
    let cmpPlaca3 = placa.charAt(3);
    let cmpPlaca4 = placa.charAt(4);
    let cmpPlaca5 = placa.charAt(5);
    let cmpPlaca6 = placa.charAt(6);
    let cadena = placa.length -1;
    let cmpPlaca7 = placa.charAt(cadena)
    let condicion = false;
    let estadoLongitud;
    let estadoPrimero;
    let estadoSegundo;
    let estadoTercero;
    let estadoCuarto;
    let estadoQuinto;
    let estadoSexto;
    let estadoSeptimo; 
    let estadoOctavo;
    let errores;
    if(placa.length<7 || placa.length>8)
    {
        estadoLongitud= "PLACA INCORRECTA DEBE TENER 7 A 8 CARACTERES"
        condicion = true;
    }
    else
    {
        estadoLongitud= "";
    }
    
    if(!(esMayuscula(cmpPlaca)))
    {
        estadoPrimero = "EL PRIMER CARACTER DEBER SER EN MAYUSCULA"
        condicion = true;
    }
    else
    {
        estadoPrimero= "";
    }

    if(!(esMayuscula(cmpPlaca1)))
    {
        estadoSegundo = "EL SEGUNDO CARACTER DEBER SER EN MAYUSCULA"
        condicion = true;
    }
    else
    {
        estadoSegundo= "";
    }


    if(!(esMayuscula(cmpPlaca2)))
    {
        estadoTercero = "EL TERCER CARACTER DEBER SER EN MAYUSCULA"
        condicion = true;
    }
    else
    {
        estadoTercero= "";
    }

    if(!(esGuion(cmpPlaca3)))
    {
        estadoCuarto = "EL CUARTO CARACTER DEBER SER UN GUION"
        condicion = true;
    }
    else
    {
        estadoCuarto= "";
    }

    if(!(esDigito(cmpPlaca4)))
    {
        estadoQuinto =  "EL QUINTO CARACTER DEBE SER UN DIGITO";
        condicion = true;
    }
    else
    {
        estadoQuinto= "";
    }

    if(!(esDigito(cmpPlaca5)))
    {
        estadoSexto =  "EL SEXTO CARACTER DEBE SER UN DIGITO";
        condicion = true;
    }
    else
    {
        estadoSexto= "";
    }

    if(!(esDigito(cmpPlaca6)))
    {
        estadoSeptimo =  "EL SEPTIMO CARACTER DEBE SER UN DIGITO";
        condicion = true;
    }
    else
    {
        estadoSeptimo= "";
    }


    if(cadena == 7)
    {
        if(!(esDigito(cmpPlaca7))) 
        {
            estadoOctavo = "EL OCTAVO CARACTER DEBE SER UN DIGITO";
            condicion = true;
        }
        else
        {
            estadoOctavo= "";
        } 
    }
    

    //if(condicion == true)
    //{
        //errores = estadoLongitud+"\n"+estadoPrimero+"\n"+estadoSegundo+"\n"+estadoTercero+"\n"+estadoCuarto+"\n"+estadoQuinto+"\n"+estadoSexto+"\n"+estadoSeptimo+"\n"+estadoOctavo;
        //return errores;
    //}
    //else
    //{
        //return null;
    //}

    if (condicion == true) 
    {
        let errores = "";
        if (estadoLongitud) 
        {
            errores += estadoLongitud + "\n";
        }
        if (estadoPrimero) 
        {
            errores += estadoPrimero + "\n";
        }
        if (estadoSegundo) 
        {
            errores += estadoSegundo + "\n";
        }
        if (estadoTercero) 
        {
            errores += estadoTercero + "\n";
        }
        if (estadoCuarto) 
        {
            errores += estadoCuarto + "\n";
        }
        if (estadoQuinto) 
        {
            errores += estadoQuinto + "\n";
        }
        if (estadoSexto) {

            errores += estadoSexto + "\n";
        }
        if (estadoSeptimo) 
        {
            errores += estadoSeptimo + "\n";
        }
        if (estadoOctavo) 
        {
            errores += estadoOctavo + "\n";
        }
        
        return errores;
    } 
    else 
    {
        return null;
    }
    

}