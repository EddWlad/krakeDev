//No se olvide de respirar, mantenga la calma y demuestre lo que sabe

let palabraSecreta ="";

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

guardarPalabra = function()
{
    let palabra = recuperarTexto("txtSecreta");
    let letra = "";
    if((palabra.length != 5))
    {
        alert("Ingrese la palabra con 5 letras y mayusculas");     
    }
    else
    {
        for(i=0;i<palabra.length;i++)
        {
            letra = palabra.charAt(i);
            if (esMayuscula(letra))
            {
                palabraSecreta+=letra;
            }
            else
            {
                alert("Ingrese la palabra en mayusculas");
                return;                
            }
        }
        console.log(palabraSecreta);   
    }

}

mostrarLetra = function(letra,posicion)
{
    switch(posicion)
    {
        case 0:
            mostrarTexto("div0",letra);
            break;
        case 1:
            mostrarTexto("div1",letra);
            break;
        case 2:
            mostrarTexto("div2",letra);
            break;
        case 3:
            mostrarTexto("div3",letra);
            break;
        case 4:
            mostrarTexto("div4",letra);
            break;
    }
}

validar = function(letra)
{
    let letrasEncontradas =0;
    for(i=0; i<palabraSecreta.length; i++)
    {
        let caracter = palabraSecreta.charAt(i);
        if (caracter == letra)
        {
            mostrarLetra(caracter,i);
            letrasEncontradas += 1;
        }
    }
}

ingresarLetra = function()
{
    let letra = recuperarTexto("txtLetra");
    if(esMayuscula(letra))
    {
        validar(letra);
    }
    else
    {
        alert("SOLO SE ACEPTAN MAYUSCULAS");
    }
}