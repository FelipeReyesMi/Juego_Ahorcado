var pantalla = document.querySelector(".juego");
var pincel = pantalla.getContext("2d");
var button = document.querySelector(".go");
var ver = document.querySelector(".ver");
var input = document.querySelector(".cuadro");
var nuevaFrase = document.querySelector(".nuevafrase");
var agregar = document.querySelector(".agregar");
var reiniciar = document.querySelector(".reiniciar");
var contador = 1;
var x = 100;
input.disabled = true;
ver.disabled = true;
var frase = "";
var resultado = [];
function registro() {
    frase = nuevaFrase.value;
    nuevaFrase.disabled = true;
    agregar.disabled = true;
    button.disabled = false;
    nuevaFrase.value = "";

}

function linea(x1, y1, x2, y2, color, grosor) {
    pincel.beginPath();
    pincel.strokeStyle = color;
    pincel.lineWidth = grosor;
    pincel.moveTo(x1, y1);
    pincel.lineTo(x2, y2);
    pincel.stroke();
}

function escribirTexto(x, y, texto) {
    pincel.font = "35px Arial";
    pincel.fillStyle = "black";
    pincel.fillText(texto, x, y);
}


function adivinar() {
    var t = false;
    p = 110;
    for (var posicion = 0; posicion < frase.length; posicion++) {

        if (frase[posicion] == input.value || frase == input.value) {
            escribirTexto(p, 340, frase[posicion]);
            input.focus();
            t = true;

            resultado.push(frase[posicion]);

        }
        p = p + 51;
    }
    input.value = "";
    if (resultado.length == frase.length) {
        escribirTexto(500, 100, "Ganaste!");
        nuevaFrase.disabled = true;
        agregar.disabled = true;
        input.disabled = true;
        ver.disabled = true;
        nuevaFrase.value = "";
        input.value = "";

    }
    console.log(resultado)
    while (contador <= 7) {
        if (contador == 7) {
            escribirTexto(500, 100, "Fin del Juego");
            input.disabled = true;
            ver.disabled = true;
            button.disabled = false;
        }
        if (t == false) {
            dibujar();
            input.value = "";
            input.focus();
            contador++;
        }
        break;
    }
}

function dibujar() {
    if (contador == 1) {
        orca();
    } else
    if (contador == 2) {
        circulo();
    } else
    if (contador == 3) {
        linea(330, 106, 330, 150, "black", 5);
    } else
    if (contador == 4) {
        linea(330, 150, 310, 180, "black", 5);

    } else
    if (contador == 5) {
        linea(330, 150, 350, 180, "black", 5);

    } else
    if (contador == 6) {
        linea(330, 125, 310, 110, "black", 5);

    } else
    if (contador == 7) {
        linea(330, 125, 350, 110, "black", 5);
        linea(323, 92, 328, 85, "black", 2);
        linea(323, 85, 328, 92, "black", 2);
        linea(333, 92, 338, 85, "black", 2);
        linea(333, 85, 338, 92, "black", 2);
        linea(325, 98, 336, 98, "black", 2);
    }
}

function circulo() {
    pincel.fillStyle = "gray";
    pincel.beginPath();
    pincel.arc(330, 90, 15, 0, 2 * 3.14);
    pincel.fill();
}

function comenzar() {
    contador = 1;
    pantalla.width = pantalla.width;
    x = 100;
    for (var i = 1; i <= frase.length; i++) {
        linea(x, 350, x + 40, 350, "blue", 5);
        x = x + 50;
    }
    button.disabled = true;
    input.disabled = false;
    ver.disabled = false;
    input.focus();
}

function orca() {
    linea(100, 250, 280, 250, "maroon", 8);
    linea(190, 50, 190, 250, "maroon", 8);
    linea(150, 50, 330, 50, "maroon", 8);
    linea(330, 50, 330, 80, "maroon", 8);
}

function reinicio() {
    pantalla.width = pantalla.width;
    nuevaFrase.disabled = false;
    agregar.disabled = false;
    input.disabled = true;
    ver.disabled = true;
    nuevaFrase.value = "";
    input.value = "";
    contador = 1;
    x = 100;
    frase = "";
    resultado = [];
}


button.onclick = comenzar;
ver.onclick = adivinar;
agregar.onclick = registro;
reiniciar.onclick = reinicio;