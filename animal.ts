// Defino la clase Animal.
 export class Animal {
    protected nombre: string;
    protected edad: number;
    protected raza: string;

    public constructor(nombre: string, edad: number, raza: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
    }
    // Defino el método Hacer Sonido, el cual es compartido por los 3 animales
    public hacerSonido(): void {
        console.log(`${this.nombre} hace un sonido.`)
    }

    // Defino el método Moverse, el cual es compartido por los 3 animales.
    public moverse(): void {
        console.log(`${this.nombre} se mueve.`)
    }
}