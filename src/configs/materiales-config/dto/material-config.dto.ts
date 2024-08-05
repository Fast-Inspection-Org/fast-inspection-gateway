import { SubsistemaConfigDTO } from "src/configs/subsistemas-config/dto/subsistema-config.dto"
import { TipoDeterioroConfigDTO } from "src/configs/tipo-deterioros-config/dto/tipo-deterioro-config.dto"


export class MaterialConfigDTO {
    id: number // Atributo unico
    nombre: String
    tiposDeteriorosConfig?: Array<TipoDeterioroConfigDTO> // Un material tiene muchos tipos de deterioros asociados
    subsistemaConfig: SubsistemaConfigDTO


}