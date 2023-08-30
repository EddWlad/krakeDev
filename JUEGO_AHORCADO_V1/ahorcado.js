//No se olvide de respirar, mantenga la calma y demuestre lo que sabe

let palabraSecreta ="";
let intentos = 0;
let coincidencias =0;
let errores = 0;

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
        default:
            mostrarTexto("div4",letra);

    }
}

validar = function(letra)
{

    let encontrada = false; // Variable para rastrear si se encontró la letra

    for (let i = 0; i < palabraSecreta.length; i++) {
        let caracter = palabraSecreta.charAt(i);

        if (letra === caracter) {
            mostrarLetra(caracter, i);
            coincidencias += 1;
            encontrada = true; // Indicar que se encontró la letra
        }
    }

    if (!encontrada) {
        errores += 1;
        mostrarAhorcado(errores);
    }
}

ingresarLetra = function()
{
    intentos+=1;
    let letra = recuperarTexto("txtLetra");
    if(esMayuscula(letra))
    {
        validar(letra);
        if(coincidencias === 5)
        {
            mostrarGanador(coincidencias);
        }
    }
    else
    {
        alert("SOLO SE ACEPTAN MAYUSCULAS");
    }
}

mostrarAhorcado = function(errores)
{
    switch(errores)
    {
        case 1:
            mostrarImagen("ahorcadoImagen","Ahorcado_01.png" );
            break;
        case 2:
            mostrarImagen("ahorcadoImagen","Ahorcado_02.png" );
            break;
        case 3:
            mostrarImagen("ahorcadoImagen","Ahorcado_03.png" );
            break;
        case 4:
            mostrarImagen("ahorcadoImagen","Ahorcado_04.png" );
            break;
        case 5:
            mostrarImagen("ahorcadoImagen","Ahorcado_05.png" );
            break;
        case 6:
            mostrarImagen("ahorcadoImagen","Ahorcado_06.png" );
            break;
        case 7:
            mostrarImagen("ahorcadoImagen","Ahorcado_07.png" );
            break;
        case 8:
            mostrarImagen("ahorcadoImagen","Ahorcado_08.png" );
            break;
        case 9:
            mostrarImagen("ahorcadoImagen","Ahorcado_09.png" );
            break;
        default:
            mostrarPerdedor(intentos);
    }
}

mostrarGanador = function(coincidencias)
{
    switch(coincidencias)
    {
        case 5:
            mostrarImagen("resultado", "ganador.gif");
            break;
        default:
    }
}

mostrarPerdedor = function(intentos)
{
    switch(intentos)
    {
        case 10:
            mostrarImagen("resultado", "gameOver.gif");
            break;
        default:
    }
}