function validarPass() {
    let pass = document.getElementById("pass").value;
    let rePass = document.getElementById("rePass").value;
    let mensaje = document.getElementById("mensaje");

    if (pass.length !=0) {
        if (pass == rePass) {
            document.getElementById("mensaje").className="text-success"
            mensaje.textContent = "Las contraseñas coinciden";
        }
        else
        {
            document.getElementById("mensaje").className="text-danger"
            mensaje.textContent = "Las contraseñas no coinciden";
        }
    }
}