import { ApiProperty } from '@nestjs/swagger';

export class CampoSerializable {
  @ApiProperty({
    description: 'Representa el identificador único del Campo',
    example: '1',
    type: 'numérico',
    required: true,
  })
  id: number;
  @ApiProperty({
    description: 'Representa el nombre del Campo',
    example: 'Salud',
    type: 'texto',
    required: true,
  })
  nombre: string;
  @ApiProperty({
    description: 'Representa el nivel de importancia del Campo',
    example: '1',
    type: 'numérico',
    required: true,
  })
  nivelImportancia: number;
}
