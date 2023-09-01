probarAtributos = function()
{
    let persona = 
    {
        nombre : "Pedro",
        apellito : "Morales",
        edad: 25,
        estaVivo: true
    }
    console.log(persona.nombre);
    console.log(persona.edad);
    if(persona.estaVivo == false)
    {
        console.log("no esta vivo");
    }
    else
    {
        console.log('si esta vivo');
    }
    
}

crearProducto = function()
{
    let producto1 = 
    {
        nombre: "YOGURT",
        precio: 3.58,
        stock: 4
    }

    let producto2 = 
    {
        nombre: "LECHE",
        precio: 0.55,
        stock: 8
    }
    console.log(`Producto: ${producto1.nombre}`);
    console.log(`Precio: ${producto2.precio}`);

    if(producto1.stock>producto2.stock)
    {
        console.log("Producto1 tiene mayor stock");
    }
    else if(producto1.stock<producto2.stock)
    {
        console.log("Producto2 tiene mayor stock");
    }
    else
    {
        console.log("Ambos productos tienen el mismo stock");
    }

}

modificarAtributos = function()
{
    let cuenta = 
    {
        numero: "4053879313",
        saldo: 0.0
    }
    cuenta.saldo=100;
    cuenta.saldo+=10;

    console.log(cuenta.saldo);
}

crearCliente = function()
{
    let cliente = 
    {
        cedula: "1720723640",
        nombre: "Edison"
    }

    let cliente1 = 
    {

    }
    cliente1.nombre = "Edison";
    cliente1.apellido = "Morocho";
    cliente1.cedula = "1720723640"
}


probarIncrementoSaldo = function()
{
    let cta = 
    {
        numero: "5586",
        saldo: 34.0
    }
    incrementarSaldo(cta,100);
    console.log(cta.saldo);
}


probarDeterminarMayor = function()
{
    let mayor;
    let persona1 = 
    {
        nombre: "Daniel",
        edad: 45
    }
    let persona2 = 
    {
        nombre: "Fernando",
        edad: 58
    }
   mayor = determinarMayor(persona1,persona2);
   if(mayor !=null)
   {
    console.log("El mayor es: "+mayor.nombre);
   }
   
}

incrementarSaldo = function(cuenta,monto)
{
    cuenta.saldo+=monto;
}

determinarMayor = function(persona1, persona2)
{
    if(persona1.edad>persona2.edad)
    {
        return persona1;
    }
    else if(persona1.edad<persona2.edad)
    {
        return persona2;
    }
    else
    {
        return null;
    }
}