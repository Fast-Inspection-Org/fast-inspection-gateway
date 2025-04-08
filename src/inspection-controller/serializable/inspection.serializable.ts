import { ApiProperty } from '@nestjs/swagger';

export class InspectionSerializable {
  @ApiProperty({
    description: 'Representa el identificador único de la Inspección',
    example: '1',
    type: 'texto',
    required: true,
  })
  id: string;
  @ApiProperty({
    description: 'Representa la fecha en la que fue iniciada la Inspección',
    example: '24/04/2025',
    type: 'date',
    required: true,
  })
  fechaInicio: Date;
  @ApiProperty({
    description:
      'Representa la versión de la configuración con la que fue realizada la Inspección',
    example: '1',
    type: 'numérico',
    required: true,
  })
  configVersion: string;
  @ApiProperty({
    description:
      'Representa el índice de criticidad calculado de la Inspección',
    example: '1',
    type: 'numérico',
    required: true,
  })
  indiceCriticidad: number;
  @ApiProperty({
    description:
      'Representa la cantidad de deterioros identificados en la Inspección',
    example: '5',
    type: 'numérico',
    required: true,
  })
  cantDeterioros: number;
}
