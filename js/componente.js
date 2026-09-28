function cerrarToast(toast) {
    toast.classList.remove("mostrar");

    if (toast.timeoutId) {
        clearTimeout(toast.timeoutId);
    }

    setTimeout(() => {
        toast.remove();
    }, 400);
}

function mostrarToast(mensaje, tipo) {
    let contenedor = document.getElementById("contenedorToast");

    if (!contenedor) {
        contenedor = document.createElement("div");
        contenedor.id = "contenedorToast";
        document.body.appendChild(contenedor);
    }

    let toast = document.createElement("div");
    toast.className = "toast " + tipo;

    let icono = "";

    switch (tipo) {
        case "success":
            icono = "✔️";
            break;
        case "error":
            icono = "‼️";
            break;
        case "warning":
            icono = "⚠️";
            break;
        default:
            icono = "☑️";
            break;
    }

    let contenido = document.createElement("div");
    contenido.className = "toast-contenido";
    contenido.innerHTML = `
        <span class="icono">${icono}</span>
        <span>${mensaje}</span>
    `;

    let cerrar = document.createElement("button");
    cerrar.type = "button";
    cerrar.className = "toast-cerrar";
    cerrar.textContent = "×";
    cerrar.setAttribute("aria-label", "Cerrar notificación");
    cerrar.addEventListener("click", () => cerrarToast(toast));

    toast.appendChild(contenido);
    toast.appendChild(cerrar);
    contenedor.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("mostrar");
    }, 100);

    toast.timeoutId = setTimeout(() => {
        cerrarToast(toast);
    }, 5000);
}