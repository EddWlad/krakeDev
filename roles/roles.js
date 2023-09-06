let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"1720723640",nombre:"Edison",apellido:"Morocho",sueldo:800.0}
]

let esNuevo = false;

mostrarOpcionEmpleado = function()
{
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleados();
    deshabilitarElementos();
}

mostrarOpcionRol = function()
{
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
}

mostrarOpcionResumen = function()
{
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
}

mostrarEmpleados = function()
{
    let cmpTabla = document.getElementById("tablaEmpleados")
    let contenidoTabla = "<table><tr>"+
    "<th>CEDULA</th>"+
    "<th>NOMBRE</th>"+
    "<th>APELLIDO</th>"+
    "<th>SUELDO</th>"+
    "</tr>";
    let elementoEmpleados;
    for(let i =0; i<empleados.length;i++)
    {
        elementoEmpleados=empleados[i];
        contenidoTabla+=
        "<tr><td>"+elementoEmpleados.cedula+"</td>"
        +"<td>"+elementoEmpleados.nombre+"</td>"
        +"<td>"+elementoEmpleados.apellido+"</td>"
        +"<td>"+elementoEmpleados.sueldo+"</td>"
        +"</tr>";
    }
    contenidoTabla+="</table>";
    cmpTabla.innerHTML=contenidoTabla;
}

ejecutarNuevo = function()
{
    esNuevo = true;
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar"); 
}

buscarEmpleados = function(cedula)
{
    let elementoEmpleado;
    let empleadoEncontrado = null;
    for(i=0;i<empleados.length;i++)
    {
        elementoEmpleado = empleados[i];
        if (elementoEmpleado.cedula==cedula)
        {
            empleadoEncontrado=elementoEmpleado;
            break;
        }
    }
    return empleadoEncontrado;
}


agregarEmpleado = function(empleado)
{
    let resultado;
    resultado = buscarEmpleados(empleado.cedula)
    if(resultado == null)
    {
        empleados.push(empleado);
        return true;
    }
    else
    {
        return false; 
    }      
}

guardar = function()
{
    let valorCedula=recuperarTexto("txtCedula");
    let valorNombre=recuperarTexto("txtNombre");
    let valorApellido=recuperarTexto("txtApellido");
    let valorSueldo=recuperarFloat("txtSueldo");

    let cedula = validacionCedula(valorCedula);
    let nombre = validacionNombre(valorNombre);
    let apellido = validacionApellido(valorApellido);
    let sueldo = validacionSueldo(valorSueldo);

    let agregoEmpleado;

    if(cedula && nombre && apellido && sueldo)
    {
        if(esNuevo)
        {
            let empleado = {};
            
            empleado.cedula=valorCedula;
            agregoEmpleado = agregarEmpleado(empleado);
            empleado.nombre=valorNombre;
            empleado.apellido=valorApellido;
            empleado.sueldo=valorSueldo; 
            if(agregoEmpleado)
            {
                alert("EMPLEADO GUARDADO CORRECTAMENTE");
                mostrarEmpleados();
                deshabilitarElementos();
                esNuevo = false; 
            }
            else
            {
                alert("YA EXISTE UN EMPLEADO CON LA CEDULA: "+empleado.cedula);
            }
        }
        else
        {
            let valorCedula=recuperarTexto("txtCedula");
            let valorNombre=recuperarTexto("txtNombre");
            let valorApellido=recuperarTexto("txtApellido");
            let valorSueldo=recuperarFloat("txtSueldo");

            let modificaEmpleado = {};
            modificaEmpleado.cedula = valorCedula;
            modificaEmpleado.nombre=valorNombre;
            modificaEmpleado.apellido=valorApellido;
            modificaEmpleado.sueldo=valorSueldo;

            modificarEmpleado(modificaEmpleado);
            mostrarEmpleados();
            deshabilitarElementos();
        }         
    }
}

modificarEmpleado =  function(empleado)
{
    let empleadoEncontrado =buscarEmpleados(empleado.cedula);
    if (empleadoEncontrado!=null)
    {
        empleadoEncontrado.nombre=empleado.nombre;
        empleadoEncontrado.apellido=empleado.apellido;
        empleadoEncontrado.sueldo=empleado.sueldo; 
    }
}

validacionCedula = function(cedula)
{
    let mensaje ="";
    let estado;
    if(cedula.length==10)
    {
        for(let i=0; i<cedula.length;i++)
        {
            let caracterCedula = cedula.charAt(i);
            if(esDigito(caracterCedula))
            {
                estado =  true;
                mostrarTexto("lblErrorCedula","");
            }
            else
            {
                mensaje = "La cedula debe ser solo digitos"; 
                mostrarTexto("lblErrorCedula",mensaje);
                estado = false;
                break;    
            }
        }
    }
    else
    {
        mensaje = "La cedula debe tener 10 digitos" ;
        mostrarTexto("lblErrorCedula",mensaje);
        estado = false;
    } 
    return estado;
}

validacionNombre = function(nombre)
{
    let mensaje ="";
    let estado;
    if(nombre.length>=3)
    {
        for(let i=0; i<nombre.length;i++)
        {
            let caracterNombre = nombre.charAt(i);
            if(esMayuscula(caracterNombre))
            {
                estado = true;
                mostrarTexto("lblErrorNombre","");
            }
            else
            {
                mensaje = "El nombre solo debe tener letras mayusculas";
                mostrarTexto("lblErrorNombre",mensaje);
                estado = false;
                break;    
            }
        }   
    }
    else
    {
        mensaje = "El nombre debe tener una logitud de almenos 3 caracteres";
        mostrarTexto("lblErrorNombre",mensaje);
        estado = false;
    }
    return estado;  
}

validacionApellido = function(apellido)
{
    let mensaje ="";
    let estado;
    if(apellido.length>=3)
    {
        for(let i=0; i<apellido.length;i++)
        {
            let caracterApellido= apellido.charAt(i);
            if(esMayuscula(caracterApellido))
            {
                estado = true;
                mostrarTexto("lblErrorApellido","");
            }
            else
            {
                mensaje = "El apellido solo debe tener letras mayusculas";
                mostrarTexto("lblErrorApellido",mensaje);
                estado = false;
                break;    
            }
        }   
    }
    else
    {
        mensaje = "El apellido debe tener una logitud de almenos 3 caracteres";
        mostrarTexto("lblErrorApellido",mensaje);
        estado = false;
    }
    return estado;
}

validacionSueldo = function(sueldo)
{
    let estado;
    if(!isNaN(sueldo))
    {
        if(sueldo>=400 && sueldo<=5000)
        {
            
            estado =true;
            mostrarTexto("lblErrorSueldo","");
            
        }
        else
        {
            mensaje = "El sueldo debe ser entre 400 y 5000 dolares";
            mostrarTexto("lblErrorSueldo",mensaje);
            estado = false;
        }
    }
    else
    {
        mensaje = "Error de valor de sueldo";
        mostrarTexto("lblErrorSueldo",mensaje);
        estado = false;
    }
    return estado;
}

deshabilitarElementos = function()
{
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");  
}

ejecutarBusqueda = function()
{
    let valorBusqueda=recuperarTexto("txtBusquedaCedula");
    let busqueda = buscarEmpleados(valorBusqueda); 
    if(busqueda == null)
    {
        alert("EMPLEADO NO EXISTE")
    }
    else
    {
        mostrarTextoEnCaja("txtCedula",busqueda.cedula);
        mostrarTextoEnCaja("txtNombre",busqueda.nombre);
        mostrarTextoEnCaja("txtApellido",busqueda.apellido);
        mostrarTextoEnCaja("txtSueldo",busqueda.sueldo);
        habilitarComponente("txtNombre");
        habilitarComponente("txtApellido");
        habilitarComponente("txtSueldo");
        deshabilitarComponente("txtCedula");
        habilitarComponente("btnGuardar"); 

    } 
}

limpiar = function()
{
    mostrarTextoEnCaja("txtCedula","");
    mostrarTextoEnCaja("txtNombre","");
    mostrarTextoEnCaja("txtApellido","");
    mostrarTextoEnCaja("txtSueldo","");
    mostrarTextoEnCaja("txtBusquedaCedula","");
    esNuevo = false;
    deshabilitarElementos();
}

buscarRol = function()
{
    let busquedaRol = recuperarTexto("txtBusquedaCedulaRol");
    let rolEncontrado = buscarEmpleados(busquedaRol);
    if(rolEncontrado == null)
    {
        alert("NO SE ENCONTRO EMPLEADO"); 
    }
    else
    {
        mostrarTexto("infoCedula",rolEncontrado.cedula);
        mostrarTexto("infoNombre",rolEncontrado.nombre+" "+rolEncontrado.apellido);
        mostrarTexto("infoSueldo",rolEncontrado.sueldo);
    }
}