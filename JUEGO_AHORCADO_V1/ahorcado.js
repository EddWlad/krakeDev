//No se olvide de respirar, mantenga la calma y demuestre lo que sabe


esMayuscula = function(caracter)
{
    let letra = caracter.charCodeAt(0);
    let estado;
    if(letra>=65 && letra<=90)
    {
        estado = true;
    }
    else
    {
        estado =  false;
    }
    return estado;
}