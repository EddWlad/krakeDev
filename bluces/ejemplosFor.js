mostrarNumeros = function()
{
    console.log("antes del for");

    for( let i=0; i<4; i++)
    {
        console.log(i);
    }

    console.log("despues del for");

}

mostrarNumeros2 = function()
{
    console.log("antes del for");

    for( let indice = 0; indice<=5; indice++)
    {
        console.log(indice);
    }

    console.log("despues del for");
}

mostrarPares = function()
{
    console.log("antes del for");

    for( let x = 2; x<10; x+=2)
    {
        console.log(x);
    }

    console.log("despues del for");
}

mostrarInverso= function()
{
    console.log("antes del for");

    for( let i = 10; i>=0; i--)
    {
        console.log(i);
    }

    console.log("despues del for");
}

hackearNasaPelis= function()
{
    console.log("antes del for");

    for( let i = 0; i<=100; i+=10)
    {
        console.log("hackenado nasa "+i+"%...");
    }

    console.log("La nasa ha sido hackeada con exito");
}

mostrarImpares = function()
{
    console.log("antes del for");

    for( let impares = 1; impares<=21; impares+=2)
    {
        console.log(impares);
    }

    console.log("despues del for");
}