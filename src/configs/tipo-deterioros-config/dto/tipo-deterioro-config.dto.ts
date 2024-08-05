import { CampoDefinidoDTO } from "src/configs/campo-definido/dto/campo-definido.dto"
import { CampoDTO } from "src/configs/campo/dto/Campo.dto"
import { CausaDTO } from "src/configs/causa/dto/causa.dto"
import { MaterialConfigDTO } from "src/configs/materiales-config/dto/material-config.dto"


export class TipoDeterioroConfigDTO {
    id: number
    nombre: String
    tipo: String
    detectabilidad?: number // (solo deterioro Analisis Criticidad)
    camposDefinidos: Array<CampoDefinidoDTO> // Atributo que representa los campos definidos para este tipo de deterioro
    causas: Array<CausaDTO> // Atributo que define las causas para este tipo de deterioro
    materialConfig: MaterialConfigDTO
    camposAfectados?: Array<CampoDTO> // atributo que define los campos afectados por este tipo de deterioro (solo deterioro tipo Analisis Criticidad)

   
}