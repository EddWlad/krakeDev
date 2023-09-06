let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"1720723640",nombre:"Edison",apellido:"Morocho",sueldo:800.0}
]

let roles =[];

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
    deshabilitarComponente("btnGuardarRol");  

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

validacionDescuento = function(descuento,sueldo)
{
    let estado;
    if(!isNaN(descuento))
    {

        if(descuento>=0 && descuento<=sueldo)
        {
            
            estado =true;
            mostrarTexto("lblErrorDescuentos","");
            
        }
        else
        {
            mensaje = "DESCUENTO ERRONEO";
            mostrarTexto("lblErrorDescuentos",mensaje);
            estado = false;
        }
    }
    else
    {
        mensaje = "ERROR DE VALOR DE DESCUENTO";
        mostrarTexto("lblErrorDescuentos",mensaje);
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
        mostrarTexto("lblErrorBusquedaRol","NO SE ENCONTRO EMPLEADO"); 
    }
    else
    {
        mostrarTexto("infoCedula",rolEncontrado.cedula);
        mostrarTexto("infoNombre",rolEncontrado.nombre+" "+rolEncontrado.apellido);
        mostrarTexto("infoSueldo",rolEncontrado.sueldo);
        mostrarTexto("lblErrorBusquedaRol",""); 
    }
}

calcularAporteEmpleado = function(sueldo)
{
    let aporte = sueldo*0.0945;
    return aporte;
}

calcularValorAPagar = function(sueldo,aporteIESS,descuento)
{
    let pago = sueldo - aporteIESS - descuento;
    return pago;
}

calcularRol = function()
{
    let sueldo = recuperarFloatDiv("infoSueldo");
    let descuento = recuperarFloat("txtDescuentos");
    let aportacion;
    let pagoTotal;
    let validacion = validacionDescuento(descuento,sueldo);
    if(validacion)
    {
        aportacion = calcularAporteEmpleado(sueldo);
        mostrarTexto("infoIESS",aportacion);
        pagoTotal = (calcularValorAPagar(sueldo,aportacion,descuento)).toFixed(2);
        mostrarTexto("infoPago",pagoTotal);
        habilitarComponente("btnGuardarRol"); 
    }
}

researchRol = function(cedula)
{
    let elementoRol;
    let rolEncontrado = null;
    for(i=0;i<roles.length;i++)
    {
        elementoRol = roles[i];
        if (elementoRol.cedula==cedula)
        {
            rolEncontrado=elementoRol;
            break;
        }
    }
    return rolEncontrado;
}

agregarRol = function(rol)
{
    let resultado;
    resultado = buscarEmpleados(rol.cedula)
    if(resultado == null)
    {
        roles.push(rol);
        alert("ROL DE PAGOS AGREGADO")
    }
    else
    {
        alert("YA EXISTE ROL DE PAGOS CON ESA CEDULA")
    }      
}

calcularAporteEmpleador = function(sueldo)
{
    let valorAporteEmpleador = sueldo * 0.1115;
    return valorAporteEmpleador;
}

guardarRol = function()
{
    let totalAPagar = recuperarFloatDiv("infoPago");
    let aporteIessEmpleado = recuperarFloatDiv("infoIESS");
    let nombreEmpleado = recuperarTextoDiv("infoNombre");
    let cedulaEmpleado = recuperarTextoDiv("infoCedula");
    let sueldoEmpleado = recuperarFloatDiv("infoSueldo");
    let aporteEmpleador = calcularAporteEmpleador(sueldoEmpleado);
    let rol = {};
    rol.cedula = cedulaEmpleado;
    rol.nombre = nombreEmpleado;
    rol.sueldo = sueldoEmpleado;
    rol.valorAPagar = totalAPagar;
    rol.aporteEmpleado = aporteIessEmpleado;
    rol.aporteEmpleador = aporteEmpleador;
    agregarRol(rol);
    deshabilitarComponente("btnGuardarRol");

}