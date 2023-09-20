import { Animal } from './animal';

// Defino la clase Gato que hereda de Animal.
export class Gato extends Animal {
    protected nombre: string;
    protected edad: number;
    protected raza: string;
    private pelaje: string;

    public constructor(nombre: string, edad: number, raza: string, pelaje: string) {
        super(nombre, edad, raza);
        this.pelaje = pelaje;
    }

    // Defino el método Jugar con juguete propio del Gato.
    public jugarConJuguete(objeto: string): void {
        console.log(`${this.nombre} busca ${objeto}.`);
    }
}