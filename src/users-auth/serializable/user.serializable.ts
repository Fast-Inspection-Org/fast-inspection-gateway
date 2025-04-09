import { ApiProperty } from '@nestjs/swagger';
import { RolEnum } from 'src/utils/interfaces-and-enums';

export class UserSerializable {
  @ApiProperty({
    description: 'Representa el identificador del usuario',
    example: 'user',
    type: 'texto',
    required: true,
  })
  id: string;
  @ApiProperty({
    description: 'Representa el nombre de usuario del usuario',
    example: 'user',
    type: 'texto',
    required: true,
  })
  nombreUsuario: String;
  @ApiProperty({
    description: 'Representa la dirección de correo electrónico del usuario',
    example: 'example@example.example',
    type: 'texto',
    required: true,
  })
  email: String;
  @ApiProperty({
    description: 'Representa el rol que desempeña el usuario en el sistema',
    example:
      'Súper Administrador | Administrador | Especialista Ing Civil | Especialista Ing Civil Avanzado',
    type: 'texto',
    required: true,
  })
  rol: RolEnum;
  @ApiProperty({
    description: 'Representa el estado de la cuenta del usuario en el sistema',
    example:
      'false',
    type: 'boolean',
    required: true,
  })
  isActiva: boolean;
}
