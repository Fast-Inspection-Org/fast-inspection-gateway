import { ApiProperty } from '@nestjs/swagger';
import { CampoDefinidoSerializable } from 'src/configs/campo-definido/serializable/campo-definido.serializable';
import { CampoSerializable } from 'src/configs/campo/serializable/campo.serializable';
import { CausaSerializable } from 'src/configs/causa/serializable/causa.serializable';
import { camposDefinidosExample } from 'src/configs/tipo-deterioros-config/dto/examples-dto';

export class TipoDeterioroAnalisisCriticidadConfigSerializable {
  @ApiProperty({
    description: 'Representa el identificador único del Tipo de Deterioro',
    example: '1',
    type: 'numérico',
    required: true,
  })
  id: number;
  @ApiProperty({
    description: 'Representa el nombre del Tipo de Deterioro',
    example: 'Grieta',
    type: 'texto',
    required: true,
  })
  nombre: string;
  @ApiProperty({
    description: 'Representa el nivel de detectabilidad del Tipo de Deterioro',
    example: '1',
    type: 'numérico',
    required: true,
  })
  detectabilidad: number;
  @ApiProperty({
    description:
      'Representa los campos que afecta dicho tipo de deterioro de configuración (solo tipo de deterioro de tipo Analisis Criticidad)',
    type: CampoSerializable,
    isArray: true,
    required: true,
  })
  camposAfectados?: Array<CampoSerializable>;
  @ApiProperty({
    description:
      'Representa la cantidad de campos afectados por el Tipo de Deterioro',
    example: '1',
    type: 'numérico',
    required: true,
  })
  cantCamposAfectados: number;
  @ApiProperty({
    description:
      'Representa la cantidad de causas que originan al Tipo de Deterioro',
    example: '1',
    type: 'numérico',
    required: true,
  })
  cantCausas: number;
}

export class TipoDeterioroAnalisisCriticidadConfigSerializableWithAllProperties extends TipoDeterioroAnalisisCriticidadConfigSerializable {
  @ApiProperty({
    description: 'Representa el nivel de detectabilidad del Tipo de Deterioro',
    example: camposDefinidosExample,
    type: 'numérico',
    required: true,
  })
  camposDefinidos: Array<CampoDefinidoSerializable>;
  @ApiProperty({
    description: 'Representa las causas de aparición del Tipo de Deterioro',
    type: CausaSerializable,
    isArray: true,
    required: true,
  })
  causas: Promise<Array<CausaSerializable>>; // Atributo que define las causas para este tipo de deterioro
}
