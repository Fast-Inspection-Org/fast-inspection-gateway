import { ApiProperty } from '@nestjs/swagger';

export class ActivacionDTO {
  @ApiProperty({
    description:
      'Representa el indentificador del usuario al cuál se le necesita confirmar el código activación',
    example: '1',
    type: 'texto',
    required: true,
  })
  idUsuario: string;
  @ApiProperty({
    description: 'Representa el código de activación que suministra el usuario',
    example: '123456',
    type: 'texto',
    required: true,
  })
  codigoActivacion: string;
}
