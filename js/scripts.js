// ****************** Registro  ******************

// Validar genero
function validarGender() {
    const opciones = document.getElementsByName("inlineRadioOptions");
    let mensajeGender = document.getElementById("mensajeGender");
    let seleccionado = false;

    for (const opcion of opciones) {
        if (opcion.checked) {
            seleccionado = true;
            mensajeGender.textContent = "";
            break;
        }
    }

    if (!seleccionado) {
        mensajeGender.textContent = "Seleccione una opción";
        return false;
    }

    return true;
}

// Validar contraseña
function validarPass() {
    let pass = document.getElementById("pass").value;
    let rePass = document.getElementById("rePass").value;
    let mensajePass = document.getElementById("mensajePass");

    if (pass.length != 0) {
        if (pass == rePass) {
            document.getElementById("mensajePass").className = "text-success"
            mensajePass.textContent = "";
            return true;
        }
        else {
            document.getElementById("mensajePass").className = "text-danger"
            mensajePass.textContent = "Las contraseñas no coinciden";
            return false;
        }
    }
}

// Primera letra de nombre, apellido, ciudad y comuna siempre en mayuscula
function primeraLetraMayuscula(id) {
    let input = document.getElementById(id);
    input.addEventListener('input', function (e) {
        let valor = e.target.value;
        e.target.value = valor.charAt(0).toUpperCase() + valor.slice(1);
    });
}

// Aplicar la funcions
primeraLetraMayuscula('nombre');
primeraLetraMayuscula('apellido');

// Funcion que permite usar el maxlength en type number
function validarLongitudInput() {
    document.querySelectorAll('input[type="number"]').forEach(input => {
        input.oninput = () => {
            if (input.value.length > input.maxLength) input.value = input.value.slice(0, input.maxLength);
        };
    });
}

// ********** FORMULARIO DE VENTA **********
function cancelarVenta() {
    $('#modalCancelarVenta').modal('hide');
}

function confirmarVenta() {
    $('#modalConfirmarVenta').modal('hide');
}

function validarYCerrarModalConfirmarVenta(event) {
    let formularioVenta = document.getElementById('formularioVenta');

    if (!formularioVenta.checkValidity()) {
        alert('Por favor, completa todos los campos requeridos antes de publicar la venta.');
        event.preventDefault();
    } else {
        $('#modalConfirmarVenta').modal('hide');
    }
}

// ********** FORMULARIO DE ELIMINACION DE JUEGO **********
function cancelarElimiacionJuego() {
    $('#modalCancelarEliminacionJuego').modal('hide');
}

function confirmarEliminacionJuego() {
    $('#modalConfirmarEliminacionJuego').modal('hide');
}

function validarYCerrarModalConfirmarEliminacionJuego(event) {
    let formDeleteGame = document.getElementById('formDeleteGame');

    if (!formDeleteGame.checkValidity()) {
        alert('Por favor, completa todos los campos requeridos antes de eliminar el juego.');
        event.preventDefault();
    } else {
        $('#modalConfirmarEliminacionJuego').modal('hide');
    }
}

// ********** FORMULARIO DE SUSPENSION DE USUARIO **********
function cancelarSuspensionUsuario() {
    $('#modalCancelarSuspensionUsuario').modal('hide');
}

function confirmarSuspensionUsuario() {
    $('#modalConfirmarSuspensionUsuario').modal('hide');
}

function validarYCerrarModalConfirmarSuspensionUsuario(event) {
    let formSuspendUser = document.getElementById('formSuspendUser');

    if (!formSuspendUser.checkValidity()) {
        alert('Por favor, completa todos los campos requeridos antes de suspender al usuario.');
        event.preventDefault();
    } else {
        $('#modalConfirmarSuspensionUsuario').modal('hide');
    }
}

// ********** FORMULARIO DE ELIMINACION DE USUARIO **********
function cancelarEliminacionUsuario() {
    $('#modalCancelarEliminacionUsuario').modal('hide');
}

function confirmarEliminacionUsuario() {
    $('#modalConfirmarEliminacionUsuario').modal('hide');
}

function validarYCerrarModalConfirmarEliminacionUsuario(event) {
    let formDeleteUser = document.getElementById('formDeleteUser');

    if (!formDeleteUser.checkValidity()) {
        alert('Por favor, completa todos los campos requeridos antes de eliminar al usuario');
        event.preventDefault();
    } else {
        $('#modalConfirmarEliminacionUsuario').modal('hide');
    }
}

// ********** CARRITO **********
// Espacio cada 4 numeros
function espaciarNumeros(input) {
    if (typeof validarLongitudInput === "function") {
      validarLongitudInput();
    }
  
    let valor = input.value.replace(/\D/g, '');
    
    let nuevoValor = '';
    for (let i = 0; i < valor.length; i++) {
      if (i > 0 && i % 4 === 0) {
        nuevoValor += ' ';
      }
      nuevoValor += valor[i];
    }

    input.value = nuevoValor;
}

// Formato fecha
function validarFecha(input) {
    // Expresión regular para el formato MM/YYYY
    let formatoFecha = /^(0[1-9]|1[0-2])\/\d{4}$/;
  
    // Obtener el valor del input y eliminar caracteres no numéricos y barras adicionales
    let valor = input.value.replace(/\D/g, '').replace(/(.{2})/, '$1/');
  
    // Limitar la longitud del valor a 7 caracteres (MM/YYYY)
    valor = valor.substring(0, 7);
  
    // Insertar la barra diagonal después de los dos primeros números
    if (valor.length === 2) {
      valor += '/';
    }
  
    // Actualizar el valor del input
    input.value = valor;
  
    // Verificar si el valor cumple con el formato
    if (!formatoFecha.test(valor) && valor.length === 7) {
      // Si no cumple, mostrar un mensaje de error o tomar alguna acción
      console.log('Formato incorrecto, debe ser MM/YYYY');
    }
  }

// Solo numeros
function soloNumeros(input) {
    input.value = input.value.replace(/[^0-9]/g, '');
  }