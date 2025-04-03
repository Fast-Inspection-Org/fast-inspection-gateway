import { ApiProperty } from '@nestjs/swagger';
import { RolEnum } from 'src/utils/interfaces-and-enums';

export class CreateUsuarioDto {
  @ApiProperty({
    description: 'Representa el nombre de usuario del usuario a registrar',
    example: 'user',
    type: 'texto',
    required: true,
  })
  nombreUsuario: string;
  @ApiProperty({
    description: 'Representa la contraseña del usuario a registrar',
    example: '******',
    type: 'texto',
    required: true,
  })
  contrasena: string;
  @ApiProperty({
    description:
      'Representa la dirección de correo electrónico del usuario a registrar',
    example: 'example@example.example',
    type: 'texto',
    required: true,
  })
  email: string;
  @ApiProperty({
    description:
      'Representa el rol que desempeñará el usuario a registrar, en el sistema',
    example:
      'Súper Administrador | Administrador | Especialista Ing Civil | Especialista Ing Civil Avanzado',
    type: 'texto',
    required: true,
  })
  rol?: RolEnum;
  isActiva?: boolean;
}
