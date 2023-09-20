import { Animal } from './animal';

// Defino la clase Perro que hereda de Animal.
export class Perro extends Animal {
    public nombre: string;
    public edad: number;
    public raza: string;
    private tamaño: string;

    public constructor(nombre: string, edad: number, raza: string, tamaño: string) {
        super(nombre, edad, raza);
        this.tamaño = tamaño;
    }

    // Defino el método Buscar Objeto propio del Perro.
    public buscarObjeto(objeto: string): void {
        console.log(`${this.nombre} busca ${objeto}.`);
    }
}