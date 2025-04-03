import { ApiProperty } from '@nestjs/swagger';

export class UpdateSubsistemaConfigDTO {
  @ApiProperty({
    description: 'Representa el nombre del subsistema de configuración',
    example: 'Columna',
    type: 'texto',
    required: true,
  })
  nombre: String;
}
