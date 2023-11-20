import { Usuario } from './usuario';

export interface Docente extends Usuario {
    tipoDocente: string;
    ultimoTituloAlcanzado: string;
}
