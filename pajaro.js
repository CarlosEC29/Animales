"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pajaro = void 0;
var animal_1 = require("./animal");
// Defino la clase Pajaro que hereda de Animal.
var Pajaro = /** @class */ (function (_super) {
    __extends(Pajaro, _super);
    function Pajaro(nombre, edad, raza, tipoPico) {
        var _this = _super.call(this, nombre, edad, raza) || this;
        _this.tipoPico = tipoPico;
        return _this;
    }
    // Defino el método Volar propio del Pajaro.
    Pajaro.prototype.volar = function () {
        console.log("".concat(this.nombre, " est\u00E1 volando."));
    };
    return Pajaro;
}(animal_1.Animal));
exports.Pajaro = Pajaro;
