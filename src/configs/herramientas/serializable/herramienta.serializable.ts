import { ApiProperty, OmitType } from '@nestjs/swagger';
import { SistemaConfigSerializable } from 'src/configs/sistemas-config/serializable/sistema-config.serializable';

export class HerramientaSerializable {
  @ApiProperty({
    description: 'Representa el identificador único de la herramienta',
    example: '1',
    type: 'numérico',
    required: true,
  })
  id: number;
  @ApiProperty({
    description: 'Representa el nombre de la herramienta',
    example: 'Herramienta de Análisis de Criticidad',
    type: 'texto',
    required: true,
  })
  nombre: String;
  @ApiProperty({
    description: 'Representa de que tipo es la herramienta',
    example: 'Análisis de Criticidad | Método Impactos | Técnica de Paretos',
    type: 'texto',
    required: true,
  })
  tipo: string;
}

export class HerramientaSerializableWithAllProperties extends HerramientaSerializable {
  @ApiProperty({
    description:
      'Representa los sistemas de configuración registrados que usan dicha Herramienta',
    type: () => OmitType(SistemaConfigSerializable, ['herramienta'] as const),
    isArray: true,
    required: true,
  })
  sistemasConfig: Array<Omit<SistemaConfigSerializable, 'herramienta'>>; // atributo que representa los sistemas de configuración que utilizan dicha herramienta
}
