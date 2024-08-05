import { ConfigDTO } from "src/configs/dto/config.dto"
import { IndicadorDTO } from "src/configs/indicador/dto/indicador.dto"
import { Calculos } from "src/utils/interfaces-and-enums"

export class IndiceCalculableDTO {
    id: number
    nombre: String
    indicadoresIntervalos?: Array<IndicadorDTO> // Un indice calculable por intervalos puede tener varios indicadores de intervalos
    indicadoresSinIntervalos?: Array<IndicadorDTO> // Atributo que define los indicadores sin intervalos del indice calculable sin intervalos
    tipo: string
    calculo: Calculos
    config: ConfigDTO  // Atributo que representa la configuracion donde esta definido los indices calculables

}