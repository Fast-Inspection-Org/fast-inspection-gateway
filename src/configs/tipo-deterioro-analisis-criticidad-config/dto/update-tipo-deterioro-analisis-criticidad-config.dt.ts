import { ApiProperty } from '@nestjs/swagger';
import { CampoDefinidoDTO } from 'src/configs/campo-definido/dto/campo-definido.dto';
import { CampoDTO } from 'src/configs/campo/dto/campo.dto';
import { CausaDTO } from 'src/configs/causa/dto/causa.dto';
import {
  camposAfectadosExample,
  camposDefinidosExample,
  causasExample,
} from 'src/configs/tipo-deterioros-config/dto/examples-dto';

export class UpdateTipoDeterioroAnalisisCriticidadConfigDTO {
  @ApiProperty({
    description: 'Representa el nombre del tipo de deterioro de configuración',
    example: 'Grieta',
    type: 'texto',
    required: true,
  })
  nombre: String;
  @ApiProperty({
    description:
      'Representa los campos que afecta dicho tipo de deterioro de configuración (solo tipo de deterioro de tipo Analisis Criticidad)',
    example: camposAfectadosExample,
    type: 'json',
    required: true,
  })
  camposAfectados: Array<CampoDTO>;
  @ApiProperty({
    description:
      'Representa las causas que ocacionan la aparición del tipo de deterioro de configuración',
    example: causasExample,
    type: 'json',
    required: true,
  })
  causas: Array<CausaDTO>;
  @ApiProperty({
    description:
      'Representa los campos definidos para el tipo de deterioro de configuración (solo tipo de deterioro de tipo Analisis Criticidad)',
    example: camposDefinidosExample,
    type: 'json',
    required: true,
  })
  camposDefinidos: Array<CampoDefinidoDTO>;
  @ApiProperty({
    description:
      'Representa el nivel de detectabilidad del tipo de deterioro de configuración (solo tipo de deterioro de tipo Analisis Criticidad)',
    example: '1',
    type: 'numérico',
    required: true,
  })
  detectabilidad: number;
}
