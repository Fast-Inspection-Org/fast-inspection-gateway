import { ApiProperty } from '@nestjs/swagger';
import { MaterialConfigSerializableDetails } from 'src/configs/materiales-config/serializable/material-config.serializable';

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

export class SubsistemaConfigSerializableDetails extends SubsistemaConfigSerializable {
  @ApiProperty({
    description: 'Representa los materiales del Subsistema',
    type: MaterialConfigSerializableDetails,
    isArray: true,
    required: true,
  })
  materialesConfig: MaterialConfigSerializableDetails[];
}
