calcularTasaInteres = function(ingresoAnual)
{
    let tasaInteres;
    if(ingresoAnual<30000)
    {
        tasaInteres = 0.16;
    }
    else if(ingresoAnual>=300000 && ingresoAnual<500000)
    {
        tasaInteres = 0.15;
    }
    else if(ingresoAnual>=500000 && ingresoAnual<1000000)
    {
        tasaInteres = 0.14;
    }
    else if(ingresoAnual>=1000000 && ingresoAnual<2000000)
    {
        tasaInteres = 0.13;
    }
    else
    {
        tasaInteres = 0.12;
    }
    return tasaInteres;
}

calcularCapacidadPago = function(edad, ingresos, egresos)
{
    let valorCuota;
    if(edad > 50)
    {
        valorCuota = (ingresos - egresos)*0.3;
    }
    else if(edad <= 50 && edad >=18)
    {
        valorCuota = (ingresos - egresos)*0.4;
    }
    else
    {
        console.log("USTED ES MENOR DE EDAD");
    }

    return valorCuota;
}

calcularDescuento = function(precio, cantidad)
{
    let valorPagar;
    let valorDescuento
    if(cantidad<3)
    {
        valorPagar = (precio*cantidad);
    }
    else if(cantidad>=3 && cantidad <=5)
    {
        valorDescuento = (precio*cantidad)*0.02;
        valorPagar = (precio*cantidad) - valorDescuento;
    }
    else if(cantidad>=6 && cantidad <=11)
    {
        valorDescuento = (precio*cantidad)*0.03;
        valorPagar = (precio*cantidad) - valorDescuento;
    }
    else
    {
        valorDescuento = (precio*cantidad)*0.04;
        valorPagar = (precio*cantidad) - valorDescuento;
    }

    return valorPagar;
}

determinarColesterolLDL = function(nivelColesterol)
{
    let colesterolLDL;

    if(nivelColesterol<100)
    {
        colesterolLDL = "Colesterol de: "+nivelColesterol+" su nivel de colesterol LDL es OPTIMO";
    }
    else if(nivelColesterol>=100 && nivelColesterol<=129)
    {
        colesterolLDL = "Colesterol de: "+nivelColesterol+" su nivel de colesterol LDL es CASI OPTIMO/POCO MEJOR QUE OPTIMO";
    }
    else if(nivelColesterol>=130 && nivelColesterol<=159)
    {
        colesterolLDL = "Colesterol de: "+nivelColesterol+" su nivel de colesterol LDL es LIMITE ALTO";
    }
    else if(nivelColesterol>=160 && nivelColesterol<=189)
    {
        colesterolLDL = "Colesterol de: "+nivelColesterol+" su nivel de colesterol LDL es ALTO";
    }
    else
    {
        colesterolLDL = "Colesterol de: "+nivelColesterol+" su nivel de colesterol LDL es MUY ALTO";
    }
    
    return colesterolLDL;

}

validarClave = function(clave)
{
    if(clave.length>=8 && clave.length<=16)
    {
        return true;
    }
    else
    {
        return false;
    }
}

esMayuscula = function(caracter)
{
    let letra = caracter.charCodeAt(0);

    if(letra>=65 && letra<=90)
    {
        return true;
    }
    else
    {
        return false;
    }

}

esMinuscula = function(caracter)
{
    let letra = caracter.charCodeAt(0);

    if(letra>=97 && letra<=122)
    {
        return true;
    }
    else if (letra>=160 && letra<=163 || letra == 130)
    {
        return true;
    }
    else
    {
        return false;
    }

}

esDigito = function(caracter)
{
    let letra = caracter.charCodeAt(0);

    if(letra>=48 && letra<=57)
    {
        return true;
    }
    else
    {
        return false;
    }
}

darPermiso = function(notaMatematica, notaFisica, notaGeometria)
{
    if(notaMatematica>90 || notaFisica>90 || notaGeometria>90)
    {
        return true;
    }
    else
    {
        return false;
    }
}

otorgarPermiso = function(notaMatematica, notaFisica, notaGeometria)
{
    if(notaMatematica>90 || notaFisica>90 && notaGeometria>80)
    {
        return true;
    }
    else
    {
        return false;
    }
}

dejarSalir = function(notaMatematica, notaFisica, notaGeometria)
{
    if((notaMatematica>90 || notaFisica>90 || notaGeometria>90)&&(notaFisica>notaMatematica))
    {
        return true;
    }
    else
    {
        return false;
    }
}


