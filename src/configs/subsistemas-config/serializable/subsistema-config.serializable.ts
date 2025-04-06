import { ApiProperty } from '@nestjs/swagger';

export class SubsistemaConfigSerializable {
  @ApiProperty({
    description: 'Representa el identificador único del Subsistema',
    example: '1',
    type: 'numérico',
    required: true,
  })
  id: number;
  @ApiProperty({
    description: 'Representa el nombre del Subsistema',
    example: 'Columna',
    type: 'texto',
    required: true,
  })
  nombre: string;
  @ApiProperty({
    description: 'Representa la cantidad de materiales del Subsistema',
    example: '1',
    type: 'numérico',
    required: true,
  })
  cantMateriales: number;
}
