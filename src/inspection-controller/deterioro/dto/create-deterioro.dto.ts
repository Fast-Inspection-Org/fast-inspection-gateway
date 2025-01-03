import { CreateCampoDefinidoDTO } from "src/inspection-controller/campo-definido/dto/create-campo-definido.dto"

export class CreateDeterioroDTO {
    codigo: string
    sistemaId: string
    subsistemaId: string
    materialId: string
    tipoDeterioroId: string
    campos: Array<CreateCampoDefinidoDTO>
}