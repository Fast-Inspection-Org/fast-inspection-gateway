import { ApiProperty } from '@nestjs/swagger';
import { CampoDefinidoDTO } from 'src/configs/campo-definido/dto/campo-definido.dto';
import { CampoDTO } from 'src/configs/campo/dto/campo.dto';
import { CausaDTO } from 'src/configs/causa/dto/causa.dto';
import { MaterialConfigDTO } from 'src/configs/materiales-config/dto/material-config.dto';
import {
  camposAfectadosExample,
  camposDefinidosExample,
  causasExample,
} from './examples-dto';

export class TipoDeterioroConfigDTO {
  id: number;
  @ApiProperty({
    description: 'Representa el nombre del tipo de deterioro de configuración',
    example: 'Grieta',
    type: 'texto',
    required: true,
  })
  nombre: String;
  tipo: String;
  @ApiProperty({
    description:
      'Representa el nivel de detectabilidad del tipo de deterioro de configuración (solo tipo de deterioro de tipo Analisis Criticidad)',
    example: '1',
    type: 'numérico',
    required: true,
  })
  detectabilidad?: number; // (solo deterioro Analisis Criticidad)
  @ApiProperty({
    description:
      'Representa los campos definidos para el tipo de deterioro de configuración (solo tipo de deterioro de tipo Analisis Criticidad)',
    example: camposDefinidosExample,
    type: 'json',
    required: true,
  })
  camposDefinidos: Array<CampoDefinidoDTO>; // Atributo que representa los campos definidos para este tipo de deterioro
  @ApiProperty({
    description:
      'Representa las causas que ocacionan la aparición del tipo de deterioro de configuración',
    example: causasExample,
    type: 'json',
    required: true,
  })
  causas: Array<CausaDTO>; // Atributo que define las causas para este tipo de deterioro
  @ApiProperty({
    description:
      'Representa el Material al que estará asociado dicho tipo de deterioro',
    example: '{"id": 1}',
    type: 'json',
    required: true,
  })
  materialConfig: MaterialConfigDTO;
  @ApiProperty({
    description:
      'Representa los campos que afecta dicho tipo de deterioro de configuración (solo tipo de deterioro de tipo Analisis Criticidad)',
    example: camposAfectadosExample,
    type: 'json',
    required: true,
  })
  camposAfectados?: Array<CampoDTO>; // atributo que define los campos afectados por este tipo de deterioro (solo deterioro tipo Analisis Criticidad)
}
