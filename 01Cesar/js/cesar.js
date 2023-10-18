const desplazamiento = document.getElementById("desplazamiento");
const texto = document.getElementById("texto");
const textoCifrado = document.getElementById("cifrado");

function cifrado() {
    const textoIngresado = texto.value;

    textoCifrado.value = textoIngresado.split('').map(c => {
        let mayus = (c === c.toUpperCase()) ? true : false;
        let valorEntero = c.toLowerCase().charCodeAt(0);

        if ((valorEntero >= 97 && valorEntero <= 122) || (c >= '0' && c <= '9')) {
            const valorDesplazamiento = parseInt(desplazamiento.value);

            if (valorEntero >= 97 && valorEntero <= 122) {
                valorEntero = ((valorEntero - 97 + valorDesplazamiento) % 26) + 97;
            } else if (c >= '0' && c <= '9') {
                valorEntero = ((valorEntero - '0'.charCodeAt(0) + valorDesplazamiento) % 10) + '0'.charCodeAt(0);
            }
        }

        let cifrado = String.fromCharCode(valorEntero);
        return mayus ? cifrado.toUpperCase() : cifrado;
    }).join('');
}

texto.addEventListener("input", cifrado);
desplazamiento.addEventListener("change", cifrado);