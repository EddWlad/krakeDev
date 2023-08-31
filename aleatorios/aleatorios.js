let lengthArreglo;
randomico = function()
{
    let valorAleatorio
    let aleatorio = Math.random();
    valorAleatorio = parseInt(aleatorio*100)+1;
    return valorAleatorio;
}

generarAleatorios = function()
{
    let aleatorios = [];
    let numerosAleatorios;
    lengthArreglo=recuperarInt("txtLenghtArreglo");
    if(lengthArreglo>=5 && lengthArreglo<=20)
    {
        for(let i = 0; i<lengthArreglo; i++)
        {
            numerosAleatorios = randomico();
            aleatorios[i]=numerosAleatorios;
            console.log(i); 
        }
            mostrarResultados(aleatorios);
             
    }
    
    else
    {
        alert("SOLO SE PERMITE UN ARREGLO CON MINIMO 5 POSICIONES Y MAXIMO 20");
    }
    
     
}

mostrarResultados = function(arregloNumeros)
{
    let cmpTabla =  document.getElementById("divTabla");
    let contenidoTabla = "<table><tr><th>NUMEROS EN ARREGLO</th></tr>"
    for(let i=0;i<lengthArreglo;i++)
    {
        contenidoTabla+= "<tr><td>";
        contenidoTabla +=arregloNumeros[i];
        contenidoTabla+="</td></tr>";

    }
    contenidoTabla+="</table>";
    cmpTabla.innerHTML=contenidoTabla;
} 
