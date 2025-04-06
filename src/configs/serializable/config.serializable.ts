import { ApiProperty } from '@nestjs/swagger';

export class ConfigSerializable {
  @ApiProperty({
    description: 'Representa el indentificador único de la configuración',
    example: '1',
    type: 'numérico',
    required: true,
  })
  version: number; // atributo que representa la version de la configuración y su identificador unico
  @ApiProperty({
    description: 'Representa el nombre de la configuración',
    example: 'Herramientas de la Confiabilidad Operacional',
    type: 'texto',
    required: true,
  })
  nombre: String;
  @ApiProperty({
    description: 'Representa la descripción de la configuración',
    example:
      'Configuración de Herramientas de la Confiabilidad Operacional para empezar con el proceso de análisis de datos',
    type: 'texto',
    required: true,
  })
  descripcion: String;
  @ApiProperty({
    description:
      'Representa el estado de una configuración, define si esta está lista para ser usada o no',
    example: 'false',
    type: 'boolean',
    required: true,
  })
  state: boolean; // Atributo que define el estado de la configuración (true: terminada, false: en progreso)
  @ApiProperty({
    description:
      'Representa el porcentaje de completitud de la configuración, este hace referencia a lo que se necesita para que una configuración pueda ser marcada como "activa"',
    example: '0.50',
    type: 'numérico',
    required: true,
  })
  porcentajeCompletitud: number;
}
