import { ApiProperty } from '@nestjs/swagger';

// Representa los atributos que se pasan durante el logeo
export class LoginDTO {
  @ApiProperty({
    description:
      'Representa el nombre de usuario proporcionado en la acción de logeo',
    example: 'user',
    type: 'texto',
    required: true,
  })
  nombreUsuario: string;
  @ApiProperty({
    description: 'Representa la contraseña proporcionada en la acción de logeo',
    example: '******',
    type: 'texto',
    required: true,
  })
  contrasena: string;
}
