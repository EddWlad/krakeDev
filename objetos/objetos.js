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