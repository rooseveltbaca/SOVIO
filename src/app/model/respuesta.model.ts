export interface Respuesta {
    respuestaId?: number;
    preguntaId?: number;
    evaluacionId?: number;
    pruebaId?: number;
    respuestaTipoId?: number;
    ordenId?: number;
    secuencia?: string;
    titulo?: string;
    descripcion?: string;
    rutaImagen?: string;
    valor?: string;
    esActivo?: string;
    usuarioCreacion?: string;
    usuarioActualizacion?: string;
    usuarioEliminacion?: string;
    fechaCreacion?: Date;
    fechaActualizacion?: Date;
    fechaEliminacion?: Date;
    ipCreacion?: string;
    ipActualizacion?: string;
    ipEliminacion?: string;
}
