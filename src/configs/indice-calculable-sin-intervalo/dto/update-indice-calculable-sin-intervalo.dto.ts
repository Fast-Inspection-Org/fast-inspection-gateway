import { IndicadorDTO } from "src/configs/indicador/dto/indicador.dto"
import { Calculos } from "src/utils/interfaces-and-enums"


export class UpdateIndiceCalculableSinIntervaloDTO {
    nombre: String
    calculo: Calculos
    indicadoresSinIntervalo: Array<IndicadorDTO>
}