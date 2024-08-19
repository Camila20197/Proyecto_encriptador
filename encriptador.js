/**
 * Función que verifica si un texto es válido.
 * Solo permite letras minúsculas, espacios y sin tildes.
 * 
 * @param {string} texto - El texto que se desea validar.
 * @returns {boolean} - Retorna true si el texto es válido, false en caso contrario.
*/
function esValido(texto) {
    const regex = /^[a-z\s]+$/;
    return regex.test(texto);
}

/**
 * Función que encripta un texto según un patrón específico.
 * Reemplaza las vocales a, e, i, o, u por ai, enter, imes, ober, ufat respectivamente.
*/
function encriptar() {
    let texto = document.getElementById("input-text").value.trim();

    if (!esValido(texto)) {
        alert("El texto contiene caracteres no permitidos. Solo se aceptan letras minúsculas, sin tildes y espacios.");
        return;
    }

    const vocales = ['a', 'e', 'i', 'o', 'u'];
    const encriptados = ['ai', 'enter', 'imes', 'ober', 'ufat'];

    for (let i = 0; i < vocales.length; i++) {
        texto = texto.split(vocales[i]).join(encriptados[i]);
    }

    mostrarResultado(texto);
}

/**
 * Función que desencripta un texto encriptado con el mismo patrón.
 * Reemplaza las cadenas ai, enter, imes, ober, ufat por las vocales a, e, i, o, u respectivamente.
*/
function desencriptar() {
    let texto = document.getElementById("input-text").value.trim();

    if (!esValido(texto)) {
        alert("El texto contiene caracteres no permitidos. Solo se aceptan letras minúsculas, sin tildes y espacios.");
        return;
    }

    const encriptados = ['ai', 'enter', 'imes', 'ober', 'ufat'];
    const vocales = ['a', 'e', 'i', 'o', 'u'];

    for (let i = encriptados.length - 1; i >= 0; i--) {
        texto = texto.split(encriptados[i]).join(vocales[i]);
    }

    mostrarResultado(texto);
}

/**
 * Función que muestra el texto encriptado o desencriptado en la interfaz de usuario.
 * Además, oculta la imagen del muñeco y el párrafo de texto inicial.
 * 
 * @param {string} texto - El texto encriptado o desencriptado que se mostrará en la interfaz.
*/
function mostrarResultado(texto) {
    const outputText = document.getElementById("titulo-mensaje");
    const parrafo = document.getElementById("parrafo");
    const imagenMuñeco = document.getElementById("imagenMuñeco");
    const btnCopiar = document.getElementById("btnCopiar");

    outputText.textContent = texto;
    parrafo.style.display = "none"; 
    imagenMuñeco.style.display = "none"; 
    btnCopiar.style.display = "block"; 
}

/**
 * Función que copia el texto encriptado/desencriptado al portapapeles.
 * Utiliza la API del portapapeles del navegador.
*/
function copiar() {
    const outputText = document.getElementById("titulo-mensaje").textContent;
    navigator.clipboard.writeText(outputText).then(function() {
        alert("Texto copiado al portapapeles");
    }, function(err) {
        alert("Hubo un problema al copiar el texto: ", err);
    });
}
