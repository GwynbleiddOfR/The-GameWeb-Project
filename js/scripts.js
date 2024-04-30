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
    input.addEventListener('input', function(e) {
      let valor = e.target.value;
      e.target.value = valor.charAt(0).toUpperCase() + valor.slice(1);
    });
}

// Aplicar la funcion a ambos campos
primeraLetraMayuscula('nombre');
primeraLetraMayuscula('apellido');

// Funcion que permite usar el maxlength en type number
function validarLongitudInput() {
    document.querySelectorAll('input[type="number"]').forEach(input =>{
        input.oninput = () => {
            if(input.value.length > input.maxLength) input.value = input.value.slice(0, input.maxLength);
        };
    });
}

// ********** FORMULARIO DE VENTA **********
function cancelarVenta() {
    $('#modalCancelarVenta').modal('hide'); // Esto cierra el modal
}

function confirmarVenta() {
    $('#modalConfirmarVenta').modal('hide'); // Esto cierra el modal
}

function validarYCerrarModalConfirmarVenta(event) {
    // Obtiene el formulario por su ID
    let formularioVenta = document.getElementById('formularioVenta');
    
    // Verifica si el formulario es válido
    if (!formularioVenta.checkValidity()) {
      // Si el formulario no es válido, muestra un mensaje al usuario
      alert('Por favor, completa todos los campos requeridos antes de publicar la venta.');
      // Y luego previene la acción de envío
      event.preventDefault();
    } else {
      // Si el formulario es válido, permite que el modal se cierre
      $('#modalConfirmarVenta').modal('hide');
    }
}