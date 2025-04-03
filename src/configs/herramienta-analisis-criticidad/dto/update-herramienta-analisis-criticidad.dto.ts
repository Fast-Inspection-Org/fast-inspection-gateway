import { ApiProperty } from '@nestjs/swagger';

export class UpdateHerramientaAnalisisCriticidadDTO {
  @ApiProperty({
    description: 'Representa el nombre de la herramienta',
    example: 'Herramienta de Análisis de Criticidad',
    type: 'texto',
    required: true,
  })
  nombre: string;
}
