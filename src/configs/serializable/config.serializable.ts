import { ApiProperty } from '@nestjs/swagger';
import { HerramientaSerializable } from '../herramientas/serializable/herramienta.serializable';
import { SistemaConfigSerializableDetails } from '../sistemas-config/serializable/sistema-config.serializable';
import { IndiceCalculableSerializable } from '../indice-calculable/serializable/indice-calculable.serializable';
import {
  herramientasObtainsExample,
  indicesCalculablesObtainsExample,
} from '../dto/examples-dto';

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

export class ConfigSerializableDetails extends ConfigSerializable {
  @ApiProperty({
    description: 'Representa los indices calculables de la configuración',
    example: indicesCalculablesObtainsExample,
    type: 'json',
    required: true,
  })
  indicesCalculables: Array<IndiceCalculableSerializable>;
  @ApiProperty({
    description: 'Representa los sistemas de la configuración',
    type: SistemaConfigSerializableDetails,
    isArray: true,
    required: true,
  })
  sistemasConfig: SistemaConfigSerializableDetails[];
  @ApiProperty({
    description: 'Representa las herramientas de la configuración',
    example: herramientasObtainsExample,
    type: 'json',
    required: true,
  })
  herramientas: Array<HerramientaSerializable>;
}
