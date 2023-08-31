numeroAleatorio = function()
{
    let valorAleatorio
    let aleatorio = Math.random();
    valorAleatorio = parseInt(aleatorio*100)+1;
    return valorAleatorio;
}

generarAleatorios = function()
{
    let aleatorios = [];
    let lengthArreglo;
    lengthArreglo=recuperarInt("txtLenghtArreglo");
    for(let i = 0; i<lengthArreglo; i++)
    {
        console.log(i)
    }
    
}