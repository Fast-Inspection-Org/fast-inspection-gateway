import { RolEnum } from "src/utils/interfaces-and-enums"


export class FiltersUsuarioDTO {
    id?: number
    nombreUsuario?: String | { $regex: string, $options: string }
    email?: String
    rol?: RolEnum

    constructor(id?: number, nombreUsuario?: String | { $regex: string, $options: string }, email?: String, rol?: RolEnum) {
        this.id = id
        this.nombreUsuario = nombreUsuario
        this.email = email
        this.rol = rol
    }
}