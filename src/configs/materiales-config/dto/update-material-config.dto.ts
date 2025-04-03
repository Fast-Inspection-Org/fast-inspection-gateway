import { ApiProperty } from '@nestjs/swagger';

export class UpdateMaterialConfigDTO {
  @ApiProperty({
    description: 'Representa el nombre del material de configuración',
    example: 'Acero',
    type: 'texto',
    required: true,
  })
  nombre: String;
}
