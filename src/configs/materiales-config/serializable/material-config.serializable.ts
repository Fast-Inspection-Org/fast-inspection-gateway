import { ApiProperty } from '@nestjs/swagger';
import { TipoDeterioroAnalisisCriticidadConfigSerializable } from 'src/configs/tipo-deterioro-analisis-criticidad-config/serializable/tipo-deterioro-analisis-criticidad-config.serializable';
import { tiposDeteriorosExample } from '../dto/examples.dto';


export class MaterialConfigSerializable {
  @ApiProperty({
    description: 'Representa el identificador único del Material',
    example: '1',
    type: 'numérico',
    required: true,
  })
  id: number;
  @ApiProperty({
    description: 'Representa el nombre del Material',
    example: 'Acero',
    type: 'texto',
    required: true,
  })
  nombre: String;
  @ApiProperty({
    description:
      'Representa la cantidad de tipos de deterioros asociados a dicho Material',
    example: '5',
    type: 'numérico',
    required: true,
  })
  cantTiposDeterioros: number;
}

export class MaterialConfigSerializableDetails extends MaterialConfigSerializable {
  @ApiProperty({
    description: 'Representa los Tipo de Deterioros asociados a dicho Material',
    example: tiposDeteriorosExample,
    type: 'json',
    required: true,
  })
  tiposDeteriorosConfig: TipoDeterioroAnalisisCriticidadConfigSerializable[];
}
