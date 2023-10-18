function cifrar() {
    const mensajeOriginal = document.getElementById("mensajeOriginal").value;
    const desplazamiento = parseInt(document.getElementById("desplazamiento").value);

    let mensajeCifrado = "";

    for (let i = 0; i < desplazamiento; i++) {
        for (let j = i; j < mensajeOriginal.length; j += desplazamiento) {
            mensajeCifrado += mensajeOriginal[j];
        }
    }

    document.getElementById("mensajeCifrado").textContent = mensajeCifrado;
}

function descifrar() {
    const mensajeOriginal = document.getElementById("mensajeOriginal").value;
    const desplazamiento = parseInt(document.getElementById("desplazamiento").value);

    const filas = Math.ceil(mensajeOriginal.length / desplazamiento);
    const mensajeFinal = new Array(filas).fill("");

    let index = 0;
    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < desplazamiento; j++) {
            if (index < mensajeOriginal.length) {
                mensajeFinal[i] += mensajeOriginal[index];
                index++;
            }
        }
    }

    document.getElementById("mensajeDescifrado").textContent = mensajeFinal.join("");
}