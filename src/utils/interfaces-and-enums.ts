export enum TiposCamposDefinidos {
    Imagen = "CampoDefinidoImagen",
    Texto = "CampoDefinidoTexto",
    Numerico = "CampoDefinidoNumerico",
    Seleccion = "CampoDefinidoSeleccion"
}

export enum TipoIndicador {
    IndicadorIntervalo = "indicadorIntervalo",
    IndicadorSinIntervalo = "indicadorSinIntervalo"
}

export enum TipoIndiceCalculable {
    InidiceCalculableIntervalo = "indiceCalculableIntervalo",
    IndiceCalcuableSinIntervalo = "indiceCalculableSinIntervalo"
}

export const cantCalculos = 4

export enum Calculos {
    Detectabilidad = "Detectabilidad",
    Impacto = "Impacto",
    Frecuencia = "Frecuencia",
    Criticidad = "Criticidad"
}

export enum ConfigOrderBy {
    Nombre = "nombre",
    Version = "version"
}


// Se define el enum de los roles de usuario

export enum RolEnum {
    SuperAdministrador = "Súper Administrador",
    Administrador = "Administrador",
    Especialista = "Especialista Ing Civil",
    EspecialistaAvz = "Especialista Ing Civil Avanzado"
}

export interface RpcError {
    message: string
    status: number
}

