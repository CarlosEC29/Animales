import { Animal } from './animal';

// Defino la clase Pajaro que hereda de Animal.
export class Pajaro extends Animal {
    protected nombre: string;
    protected edad: number;
    protected raza: string;
    private tipoPico: string;

    public constructor(nombre: string, edad: number, raza: string, tipoPico: string) {
        super(nombre, edad, raza);
        this.tipoPico = tipoPico;
    }

    // Defino el método Volar propio del Pajaro.
    public volar(): void {
        console.log(`${this.nombre} está volando.`);
    }
}