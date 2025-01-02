import { CampoDefinidoDTO } from "src/configs/campo-definido/dto/campo-definido.dto"
import { CampoDTO } from "src/configs/campo/dto/campo.dto"
import { CausaDTO } from "src/configs/causa/dto/causa.dto"



export class UpdateTipoDeterioroAnalisisCriticidadConfigDTO {
    nombre: String
    camposAfectados: Array<CampoDTO>
    causas: Array<CausaDTO>
    camposDefinidos: Array<CampoDefinidoDTO>
    detectabilidad: number
}