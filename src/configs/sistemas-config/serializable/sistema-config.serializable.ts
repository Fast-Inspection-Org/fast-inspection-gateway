import { ApiProperty, OmitType } from '@nestjs/swagger';
import { HerramientaSerializable } from 'src/configs/herramientas/serializable/herramienta.serializable';
import { SubsistemaConfigSerializableDetails } from 'src/configs/subsistemas-config/serializable/subsistema-config.serializable';

export class SistemaConfigSerializable {
  @ApiProperty({
    description: 'Representa el identificador único del Sistema',
    example: '1',
    type: 'numérico',
    required: true,
  })
  id: number;
  @ApiProperty({
    description: 'Representa el nombre del Sistema',
    example: 'Estructural',
    type: 'texto',
    required: true,
  })
  nombre: String;
  @ApiProperty({
    description: 'Representa la cantidad de subsistemas que tiene el sistema',
    example: '5',
    type: 'numérico',
    required: true,
  })
  cantSubsistemas: number;
  @ApiProperty({
    description: 'Representa la herramienta seleccionada para dicho sistema',
    type: () => [HerramientaSerializable],
    required: true,
  })
  herramienta: HerramientaSerializable; // representa el nombre de la herramienta a la que pertenece el sistema
  @ApiProperty({
    description:
      'Representa la versión de la configuración a la cual pertenece dicho sistema',
    example: '1',
    type: 'numérico',
    required: true,
  })
  configVersion: number; // indica la versión de la configuración a la cual pertenece el sistema
}

export class SistemaConfigSerializableDetails extends SistemaConfigSerializable {
  @ApiProperty({
    description: 'Representa los subsistemas del sistema',
    type: SubsistemaConfigSerializableDetails,
    isArray: true,
    required: true,
  })
  subSistemasConfig: SubsistemaConfigSerializableDetails[];
}
