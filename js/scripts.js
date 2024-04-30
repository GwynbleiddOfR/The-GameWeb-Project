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
primeraLetraMayuscula('ciudad');
primeraLetraMayuscula('comuna');