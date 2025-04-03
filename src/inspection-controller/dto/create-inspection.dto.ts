import { ApiProperty } from '@nestjs/swagger';
import { CreateDeterioroDTO } from '../deterioro/dto/create-deterioro.dto';
import { deteriorosExample } from './examples-dto';

export class CreateInspectionDTO {
  @ApiProperty({
    description:
      'Representa el indentificador de la configuración con la que fue realizada la inspección',
    example: '1',
    type: 'texto',
    required: true,
  })
  configId: string; // representa la configuración con la que fue realiza la inspección
  @ApiProperty({
    description:
      'Representa el indentificador de la edificación a la cual se le realizó la inspección',
    example: '1',
    type: 'texto',
    required: true,
  })
  edificacionId: string;
  @ApiProperty({
    description: 'Representa los deterioros identificados en la inspección',
    example: deteriorosExample,
    type: 'json',
    required: true,
  })
  deterioros: Array<CreateDeterioroDTO>;
}
