import { ApiProperty } from '@nestjs/swagger';
import { RolEnum } from 'src/utils/interfaces-and-enums';

class LoginPayload {
  @ApiProperty({
    description:
      'Representa el identificador del usuario que realizó la acción de logeo',
    example: '1',
    type: 'texto',
    required: true,
  })
  id: string;
  @ApiProperty({
    description: 'Representa el rol del usuario que realizó la acción de logeo',
    example:
      'Súper Administrador | Administrador | Especialista Ing Civil | Especialista Ing Civil Avanzado',
    type: 'texto',
    required: true,
  })
  rol: RolEnum;
}

export class LoginPayloadSerializable {
  @ApiProperty({
    description:
      'Representa el token generado como parte del proceso de autenticación',
    example: '******',
    type: 'texto',
    required: true,
  })
  accessToken: string;
  @ApiProperty({
    description:
      'Representa el payload con metadatos que se genera como parte del proceso de autenticación',
    type: LoginPayload,
    required: true,
  })
  payload: LoginPayload;
}
