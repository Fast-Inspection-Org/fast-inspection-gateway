import { HerramientaDTO } from "../herramientas/dto/herramienta.dto"
import { IndiceCalculableDTO } from "../indice-calculable/dto/indice-calculable.dto"
import { SistemaConfigDTO } from "../sistemas-config/dto/sistema-config.dto"




export class ConfigDTO {
    version?: number
    nombre: string
    descripcion: string
    herramientas?: Array<HerramientaDTO> // Una configuracion puede tener muchas herramientas registradas
    indicesCalculables?: Array<IndiceCalculableDTO> // Atributo que representa los indices calculables definidos en la configuracion
    sistemasConfigs?: Array<SistemaConfigDTO> // Una configuracion tiene muchos sistemas definidos  
}