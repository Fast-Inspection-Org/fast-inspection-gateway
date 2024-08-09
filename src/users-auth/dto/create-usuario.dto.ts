import { RolEnum } from "src/utils/interfaces-and-enums"

export class CreateUsuarioDto {
    nombreUsuario: string
    contrasena: string
    email: string
    rol?: RolEnum
}
