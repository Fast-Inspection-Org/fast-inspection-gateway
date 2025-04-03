import { ApiProperty } from '@nestjs/swagger';
import { RolEnum } from 'src/utils/interfaces-and-enums';

export class UpdateUsuarioDto {
  @ApiProperty({
    description: 'Representa el nombre de usuario del usuario a actualizar',
    example: 'user',
    type: 'texto',
    required: true,
  })
  nombreUsuario: string;
  @ApiProperty({
    description: 'Representa la contraseña del usuario a actualizar',
    example: '******',
    type: 'texto',
    required: true,
  })
  contrasena: string;
  @ApiProperty({
    description:
      'Representa el rol que desempeñará el usuario a actualizar, en el sistema',
    example:
      'Súper Administrador | Administrador | Especialista Ing Civil | Especialista Ing Civil Avanzado',
    type: 'texto',
    required: true,
  })
  rol: RolEnum;
}
