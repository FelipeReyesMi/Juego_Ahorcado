var pantalla = document.querySelector(".juego");
var pincel = pantalla.getContext("2d");
var button = document.querySelector(".go");
var ver = document.querySelector(".ver");
var input = document.querySelector(".cuadro");
var nuevaFrase = document.querySelector(".nuevafrase");
var agregar = document.querySelector(".agregar");
var reiniciar = document.querySelector(".reiniciar");
var contador = 0;
var x = 10;
input.disabled = true;
ver.disabled = true;
button.disabled = true;
var frase = "";
var resultado = [];

function registro() {
    frase = nuevaFrase.value;
    frase = frase.toUpperCase();
    console.log(frase)
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
    pincel.fillStyle = "white";
    pincel.fillText(texto, x, y);
}


function adivinar() {
    var t = false;
    p = 10;
    var s = input.value;
    s = s.toUpperCase();
    for (var posicion = 0; posicion < frase.length; posicion++) {

        if (frase[posicion] == s || frase == s) {
            escribirTexto(p, 340, frase[posicion]);
            input.focus();
            t = true;

            resultado.push(frase[posicion]);

        }
        p = p + 41;
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
        button.disabled = true;

    }
    while (contador <= 8) {
        if (contador == 8) {
            escribirTexto(400, 100, "Fin del Juego");
            escribirTexto(400, 150, "La palabra a adivinar era: ");
            escribirTexto(400, 200, frase);
            input.disabled = true;
            ver.disabled = true;
            button.disabled = true;
        }
        console.log(t)
        if (t == false) {
            dibujar();
            input.value = "";
            input.focus();
            contador++;
            console.log(contador)
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
        linea(330, 106, 330, 150, "white", 5);
    } else
    if (contador == 4) {
        linea(330, 150, 310, 180, "rgba(15, 82, 227, 0.78)", 5);

    } else
    if (contador == 5) {
        linea(330, 150, 350, 180, "rgba(15, 82, 227, 0.78)", 5);

    } else
    if (contador == 6) {
        linea(330, 125, 310, 110, "yellow", 5);

    } else
    if (contador == 7) {
        linea(330, 125, 350, 110, "yellow", 5);
    }
    if (contador == 8) {
        linea(323, 92, 328, 85, "black", 2);
        linea(323, 85, 328, 92, "black", 2);
        linea(333, 92, 338, 85, "black", 2);
        linea(333, 85, 338, 92, "black", 2);
        linea(325, 98, 336, 98, "black", 2);
    }
}

function circulo() {
    pincel.fillStyle = "yellow";
    pincel.beginPath();
    pincel.arc(330, 90, 15, 0, 2 * 3.14);
    pincel.fill();
}

function comenzar() {
    contador = 1;
    pantalla.width = pantalla.width;
    x = 10;
    for (var i = 1; i <= frase.length; i++) {
        linea(x, 350, x + 30, 350, "black", 5);
        x = x + 40;
    }
    button.disabled = true;
    input.disabled = false;
    ver.disabled = false;
    input.focus();
}

function orca() {
    linea(100, 250, 280, 250, "black", 8);
    linea(190, 50, 190, 250, "black", 8);
    linea(150, 50, 330, 50, "black", 8);
    linea(330, 50, 330, 80, "black", 8);
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