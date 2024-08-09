import { RolEnum } from "src/utils/interfaces-and-enums"

export class UpdateUsuarioDto {
    nombreUsuario: string
    contrasena: string
    rol: RolEnum
}
