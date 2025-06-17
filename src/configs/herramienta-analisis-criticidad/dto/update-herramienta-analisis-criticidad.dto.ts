import { ApiProperty } from '@nestjs/swagger';
import { CampoDTOHerramienta } from 'src/configs/campo/dto/campo-herramienta.dto';

export class UpdateHerramientaAnalisisCriticidadDTO {
  @ApiProperty({
    description: 'Representa el nombre de la herramienta',
    example: 'Herramienta de Análisis de Criticidad',
    type: 'texto',
    required: true,
  })
  nombre: string;
  @ApiProperty({
    description: 'Representa los nuevos campos de la herramienta',
    type: CampoDTOHerramienta,
    required: true,
    isArray: true,
  })
  campos: CampoDTOHerramienta[];
}
