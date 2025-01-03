import { CreateDeterioroDTO } from "../deterioro/dto/create-deterioro.dto"

export class CreateInspectionDTO {
    configId: string // representa la configuración con la que fue realiza la inspección
    edificacionId: string
    deterioros: Array<CreateDeterioroDTO>
}
