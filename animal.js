"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
// Defino la clase Animal.
var Animal = /** @class */ (function () {
    function Animal(nombre, edad, raza) {
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
    }
    // Defino el método Hacer Sonido, el cual es compartido por los 3 animales
    Animal.prototype.hacerSonido = function () {
        console.log("".concat(this.nombre, " hace un sonido."));
    };
    // Defino el método Moverse, el cual es compartido por los 3 animales.
    Animal.prototype.moverse = function () {
        console.log("".concat(this.nombre, " se mueve."));
    };
    return Animal;
}());
exports.Animal = Animal;
