import { HerramientaDTO } from "src/configs/herramientas/dto/herramienta.dto"

export class CampoDTO {
    id: number
    nombre: String
    nivelImportancia: number
    configVersion: number // indica la version a la que pertence el campo
    herramientaAnalisisCriticidad?: HerramientaDTO // Atributo que define a la herramienta analisis de criticidad que pertenece el campo
}