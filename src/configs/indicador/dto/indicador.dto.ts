import { IndiceCalculableDTO } from "src/configs/indice-calculable/dto/indice-calculable.dto"
import { TipoIndicador } from "src/utils/interfaces-and-enums"



export class IndicadorDTO {
    id: number
    nombre: String
    valor: number
    tipo: TipoIndicador
    limiteInferior?: number // Atributo que representa el limite inferior del intervalo
    limiteSuperior?: number // Atributo que representa el limite superior del intervalo
    indiceCalculableIntervalo: IndiceCalculableDTO  // Atributo que define el indice calculable por intervalos al que pertenece el indicador
    indiceCalculableSinIntervalo: IndiceCalculableDTO // Atributo que define el indiceCalculable sin intervalos al que pertenece el indicador sin intervalos

   
}