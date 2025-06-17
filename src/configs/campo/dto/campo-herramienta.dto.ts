import { ApiProperty } from '@nestjs/swagger';

export class CampoDTOHerramienta {
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
  @ApiProperty({
    description:
      'Representa la versión de la configuración a la cual pertenece dicho campo',
    example: '1',
    type: 'numérico',
    required: true,
  })
  configVersion: number; // indica la version a la que pertence el campo
}

export class CampoDTOHerramientaEdit {
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
