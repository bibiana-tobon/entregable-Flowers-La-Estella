// Seleccionar un producto del catálogo
function seleccionarProducto(nombreProducto) {
    const producto = document.getElementById("producto");

    producto.value = nombreProducto;

    document.getElementById("pedidos").scrollIntoView({
        behavior: "smooth"
    });
}

// Enviar el formulario
document.getElementById("formularioPedido").addEventListener("submit", function(event) {

    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const producto = document.getElementById("producto").value;
    const cantidad = document.getElementById("cantidad").value;

    const respuesta = document.getElementById("respuesta");

    respuesta.textContent =
        "¡Gracias, " + nombre + "! Tu solicitud de " +
        cantidad + " unidad(es) de " + producto +
        " ha sido registrada en esta página. Nos pondremos en contacto contigo.";

    document.getElementById("formularioPedido").reset();
});