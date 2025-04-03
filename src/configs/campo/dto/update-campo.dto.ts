import { ApiProperty } from '@nestjs/swagger';

export class UpdateCampoDTO {
  @ApiProperty({
    description: 'Representa el nombre del campo afectado',
    example: 'Salud',
    type: 'texto',
    required: true,
  })
  nombre: String;
  @ApiProperty({
    description:
      'Representa el nivel de importancia de dicho campo afectado, el cual es un atributo que define que tan importante es este campo para una edificación',
    example: '1',
    type: 'numérico',
    required: true,
  })
  nivelImportancia: number;
}
