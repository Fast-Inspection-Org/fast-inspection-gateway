import { ApiProperty } from '@nestjs/swagger';

export class UpdateConfigDTO {
  @ApiProperty({
    description: 'Representa el nombre de la configuración',
    example: 'Herramientas de la Confiabilidad Operacional',
    type: 'texto',
    required: true,
  })
  nombre?: String;
  @ApiProperty({
    description: 'Representa la descripción de la configuración',
    example:
      'Configuración de Herramientas de la Confiabilidad Operacional para empezar con el proceso de análisis de datos',
    type: 'texto',
    required: true,
  })
  descripcion?: String;
}
