import { InspectionSerializable } from 'src/inspection-controller/serializable/inspection.serializable';
import { EdificationSerializable } from './edification.serializable';
import { ApiProperty } from '@nestjs/swagger';

export class EdificationDetailsSerializable extends EdificationSerializable {
  @ApiProperty({
    description: 'Representa las inspecciones de la edificación',
    type: InspectionSerializable,
    required: true,
    isArray: true,
  })
  inspecciones: InspectionSerializable[];
}
