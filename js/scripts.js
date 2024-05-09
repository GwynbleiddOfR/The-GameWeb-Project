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
document.getElementById("pass").addEventListener("keyup", validarPass);
document.getElementById("rePass").addEventListener("keyup", validarPass);

function validarPass() {
    let pass = document.getElementById("pass").value;
    let rePass = document.getElementById("rePass").value;
    let mensajePass = document.getElementById("mensajePass");

    if (pass.length >= 8) {
        if (pass === rePass) {
            mensajePass.className = "text-success";
            mensajePass.textContent = "Las contraseñas coinciden.";
        } else {
            mensajePass.className = "text-danger";
            mensajePass.textContent = "Las contraseñas no coinciden";
        }
    } else {
        mensajePass.className = "text-danger";
        mensajePass.textContent = "La contraseña debe tener al menos 8 caracteres";
    }
}

document.getElementById('telefono').addEventListener('input', function (event) {
    this.value = this.value.replace(/[^0-9]/g, '');
});


// Primera letra de nombre, apellido, ciudad y comuna siempre en mayuscula
function primeraLetraMayuscula(id) {
    let input = document.getElementById(id);
    input.addEventListener('input', function (e) {
        let valor = e.target.value;
        e.target.value = valor.charAt(0).toUpperCase() + valor.slice(1);
    });
}

// Aplicar las funciones
primeraLetraMayuscula('nombre');
primeraLetraMayuscula('apellido');

// Funcion que permite usar el maxlength en type number
function validarLongitudInput() {
    var inputPrecio = document.getElementById('precio');
    var valor = inputPrecio.value;

    valor = valor.replace(/-/g, '');

    if (valor.length > 6) {
        valor = valor.slice(0, 6);
    }

    inputPrecio.value = valor;

    var inputCopias = document.getElementById('copias');
    var valorCopias = inputCopias.value;

    if (valorCopias.length > 2) {
        valorCopias = valorCopias.slice(0, 2);
    }

    inputCopias.value = valorCopias;
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
    let formatoFecha = /^(0[1-9]|1[0-2])\/\d{4}$/;
    let valor = input.value.replace(/\D/g, '').replace(/(.{2})/, '$1/');
  
    valor = valor.substring(0, 7);
  
    if (valor.length === 2) {
      valor += '/';
    }
  
    input.value = valor;

    if (!formatoFecha.test(valor) && valor.length === 7) {
      console.log('Formato incorrecto, debe ser MM/YYYY');
    }
  }

// Solo numeros
function soloNumeros(input) {
    input.value = input.value.replace(/[^0-9]/g, '');
  }