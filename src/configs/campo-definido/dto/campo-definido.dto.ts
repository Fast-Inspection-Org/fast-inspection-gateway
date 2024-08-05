import { TipoDeterioroConfigDTO } from "src/configs/tipo-deterioros-config/dto/tipo-deterioro-config.dto"
import { TiposCamposDefinidos } from "src/utils/interfaces-and-enums"


export class CampoDefinidoDTO {
    id: number // Atributo unico
    nombre: String // Atributo que define el nombre del campo por ejemplo: largo, ancho, profundidad, etc
    tipo: TiposCamposDefinidos //Atributo que define el tipo de campo por ejemplo: texto, numero, fecha etc, esto Sería un Enum
    // atributos del tipo numerico
    inicioIntervalo?: number
    finalIntervalo?: number
    unidadMedida?: String // representa la unidad de medida del campo númerico (en caso de que este tenga)
    // atributos del tipo selección
    opciones?: Array<String> // las opciones de selección
    tipoDeterioroConfig: TipoDeterioroConfigDTO // Atributo que define el tipo de detioro configurado al que pertenece dicho campo
    
}