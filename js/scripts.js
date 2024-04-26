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

    if (pass.length !=0) {
        if (pass == rePass) {
            document.getElementById("mensajePass").className="text-success"
            mensajePass.textContent = "";
            return true;
        }
        else
        {
            document.getElementById("mensajePass").className="text-danger"
            mensajePass.textContent = "Las contraseñas no coinciden";
            return false;
        }
    }
}