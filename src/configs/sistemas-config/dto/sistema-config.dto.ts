import { ConfigDTO } from "src/configs/dto/config.dto"
import { HerramientaDTO } from "src/configs/herramientas/dto/herramienta.dto"
import { SubsistemaConfigDTO } from "src/configs/subsistemas-config/dto/subsistema-config.dto"


export class SistemaConfigDTO {
    id: number
    nombre: String
    subSistemasConfig?: Array<SubsistemaConfigDTO>
    herramienta: HerramientaDTO // atributo que define la herramienta a la cual pertenece el sistema
    config: ConfigDTO // atributo que define a la configuracion que pertenece el sistemaConfig

   
}