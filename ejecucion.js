"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var perro_1 = require("./perro");
var gato_1 = require("./gato");
var pajaro_1 = require("./pajaro");
// Ingreso los datos del Perro
var miPerro = new perro_1.Perro("Charlie", 4, "Golden", "Mediano");
// Charlie ladra.
miPerro.hacerSonido();
// Charlie se mueve.
miPerro.moverse();
// Charlie busca rama.
miPerro.buscarObjeto("rama");
// Ingreso los datos del Gato
var miGato = new gato_1.Gato("Horkheimer", 7, "Siames", "Pelaje negro");
// Horkheimer maulla.
miGato.hacerSonido();
// Horkheimer camina. 
miGato.moverse();
// Horkheimer juega con pelota de laana
miGato.jugarConJuguete("pelota de lana");
// Ingreso los datos del Pajaro
var miPajaro = new pajaro_1.Pajaro("Lola", 1, "Torcasa", "Pico corto");
// Lola canta.
miPajaro.hacerSonido();
// Lola camina.
miPajaro.moverse();
// Lola vuela.
miPajaro.volar();
