function encriptar() {
    let texto = document.getElementById("texto").value;
    
    if (texto.trim() === "") {
        alert("Por favor, ingresa algún texto para encriptar.");
        return;
    }
    if (/[A-ZÁÉÍÓÚáéíóúÑñ]/.test(texto)) {
        alert("El texto contiene letras mayúsculas o acentos. Por favor, ingresa solo letras minúsculas y sin acentos.");
        return;
    }
    let cifrado = texto
                    .replace(/e/g, "enter")
                    .replace(/i/g, "imes")
                    .replace(/a/g, "ai")
                    .replace(/o/g, "ober")
                    .replace(/u/g, "ufat");

    let box = document.querySelector(".Box");
    let muñeco=document.querySelector(".Muñeco")
    muñeco.style.display="none";
    let mensajeEncriptado = box.querySelector(".Mensaje_Encriptado");

    if (mensajeEncriptado) {
        mensajeEncriptado.remove();
    }

    let nuevoMensaje = document.createElement("p");
    nuevoMensaje.className = "Mensaje_Encriptado";
    nuevoMensaje.textContent = cifrado;
    box.insertBefore(nuevoMensaje, document.getElementById("copiarTexto"));
    let botonCopiar = document.getElementById("copiarTexto");
    botonCopiar.style.display = "block";
}
function desencriptar() {
    let texto = document.getElementById("texto").value;
    
    if (texto.trim() === "") {
        alert("Por favor, ingresa algún texto para desencriptar.");
        return;
    }

    if (/[A-ZÁÉÍÓÚáéíóúÑñ]/.test(texto)) {
        alert("El texto contiene letras mayúsculas o acentos. Por favor, ingresa solo letras minúsculas sin acentos.");
        return;
    }

    let descifrado = texto
                    .replace(/enter/g, "e")
                    .replace(/imes/g, "i")
                    .replace(/ai/g, "a")
                    .replace(/ober/g, "o")
                    .replace(/ufat/g, "u");

    let box = document.querySelector(".Box");
    let muñeco = document.querySelector(".Muñeco");
    muñeco.style.display = "none";
    let mensajeEncriptado = box.querySelector(".Mensaje_Encriptado");

    if (mensajeEncriptado) {
        mensajeEncriptado.remove();
    }

    let nuevoMensaje = document.createElement("p");
    nuevoMensaje.className = "Mensaje_Encriptado";
    nuevoMensaje.textContent = descifrado;
    box.insertBefore(nuevoMensaje, document.getElementById("copiarTexto"));
    let botonCopiar = document.getElementById("copiarTexto");
    botonCopiar.style.display = "block";
}
function copiarTexto() {
    let mensajeEncriptado = document.querySelector(".Mensaje_Encriptado").textContent;

    navigator.clipboard.writeText(mensajeEncriptado).then(function() {
        alert("Texto copiado al portapapeles");
    }).catch(function(err) {
        console.error("Error al copiar el texto: ", err);
    });
}




