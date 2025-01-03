import { TiposCampo } from "../enums/enums"

export class CreateCampoDefinidoDTO {
    nombre: string
    tipo: TiposCampo
    valor: string // representa el valor seleccionado para dicho campo
}