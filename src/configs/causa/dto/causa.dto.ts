import { TipoDeterioroConfigDTO } from "src/configs/tipo-deterioros-config/dto/tipo-deterioro-config.dto"


export class CausaDTO {
    id: number // Atributo unico
    nombre: String // Atributo que define el nombre de la causa
    tipoDeterioroConfig: TipoDeterioroConfigDTO // Atributo que define el tipo de deterioro configurado al que pertenece dicha causa
}