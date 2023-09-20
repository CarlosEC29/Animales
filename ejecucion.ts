import { Perro } from './perro';
import { Gato } from './gato';
import { Pajaro } from './pajaro';

// Ingreso los datos del Perro
const miPerro = new Perro("Charlie", 4, "Golden", "Mediano");
// Charlie ladra.
miPerro.hacerSonido();
// Charlie se mueve.
miPerro.moverse();
// Charlie busca rama.
miPerro.buscarObjeto("rama");

// Ingreso los datos del Gato
const miGato = new Gato("Horkheimer", 7, "Siames", "Pelaje negro");
// Horkheimer maulla.
miGato.hacerSonido();
// Horkheimer camina. 
miGato.moverse();
// Horkheimer juega con pelota de laana
miGato.jugarConJuguete("pelota de lana");

// Ingreso los datos del Pajaro
const miPajaro = new Pajaro("Lola", 1, "Torcasa", "Pico corto");
// Lola canta.
miPajaro.hacerSonido();
// Lola camina.
miPajaro.moverse();
// Lola vuela.
miPajaro.volar(); 