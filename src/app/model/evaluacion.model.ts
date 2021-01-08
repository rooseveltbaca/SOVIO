export interface Evaluacion {
    evaluacionId?: number;
    evaluacionTipoId?: number;
    orden?: number;
    secuencia?: string;
    titulo?: string;
    descripcion?: string;
    instruccion?: string;
    duracion?: string;
    duracionMinuto?: string;
    esActivo?: number;
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
