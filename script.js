function mostrarMensaje() {
    document.getElementById("mensaje").style.display = "block";
}

function desactivarBoton() {
    alert("¡No puedes decir que no!");
    document.getElementById("noButton").disabled = true;
}
