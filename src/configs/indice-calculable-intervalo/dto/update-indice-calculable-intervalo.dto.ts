import { IndicadorDTO } from "src/configs/indicador/dto/indicador.dto"
import { Calculos } from "src/utils/interfaces-and-enums"


export class UpdateIndiceCalculableIntervaloDTO {
    nombre: String
    calculo: Calculos
    indicadoresIntervalos: Array<IndicadorDTO>
}