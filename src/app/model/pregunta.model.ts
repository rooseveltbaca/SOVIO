import { Respuesta } from './respuesta.model';

export interface Pregunta {
    preguntaId?: number;
    evaluacionId?: number;
    pruebaId?: number;
    orden?: number;
    secuencia?: number;
    titulo?: string;
    descripcion?: string;
    rutaFoto?: string;
    respuestaCorrectaId?: string;
    respuestaCorrectaValor?: string;
    preguntaTipoId?: number;
    esActivo?: string;
    usuarioCreacion?: number;
    usuarioActualizacion?: number;
    usuarioEliminacion?: number;
    fechaCreacion?: Date;
    fechaActualizacion?: Date;
    fechaEliminacion?: Date;
    ipCreacion?: string;
    ipActualizacion?: string;
    ipEliminacion?: string;
    respuestas?: Respuesta[];
}
