import { ApiProperty } from '@nestjs/swagger';

export class HerramientaSerializable {
  @ApiProperty({
    description: 'Representa el identificador único de la herramienta',
    example: '1',
    type: 'numérico',
    required: true,
  })
  id: number;
  @ApiProperty({
    description: 'Representa el nombre de la herramienta',
    example: 'Herramienta de Análisis de Criticidad',
    type: 'texto',
    required: true,
  })
  nombre: String;
  @ApiProperty({
    description: 'Representa de que tipo es la herramienta',
    example: 'Análisis de Criticidad | Método Impactos | Técnica de Paretos',
    type: 'texto',
    required: true,
  })
  tipo: string;
}
