import { MaterialConfigDTO } from "src/configs/materiales-config/dto/material-config.dto"
import { SistemaConfigDTO } from "src/configs/sistemas-config/dto/sistema-config.dto"


export class SubsistemaConfigDTO {
    id: number
    nombre: String
    materialesConfig?: Array<MaterialConfigDTO>
    sistemaConfig: SistemaConfigDTO

}